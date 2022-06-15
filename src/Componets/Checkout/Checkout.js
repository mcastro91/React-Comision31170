import React from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import { getDocs, collection, getFirestore, addDoc, updateDoc, doc, runTransaction, getDoc } from "firebase/firestore";
import { CartContext } from "../../Context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Checkout() {

  const navigate = useNavigate([]);

  const { cart, totalPrice, deleteAllFromCart } = React.useContext(CartContext)

  const [provinciasList, setProvinciasList] = React.useState([])
  const [formValues, setFormValues] = React.useState([])
  const [orderId, setOrderId] = React.useState()
  const [shoppingList, setShoppingList] = React.useState([])

  React.useEffect(() => {
    const db = getFirestore()
    const provincias = collection(db, "Provincias")
    getDocs(provincias)
      .then(snapshot => {
        setProvinciasList(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
      })
  }, [])

  const handleOnChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
    const email = document.getElementById("email")
    const emailCheck = document.getElementById("emailCheck");

    if (email.value !== emailCheck.value) {
      emailCheck.className = "form-control is-invalid";
    }
    else {
      emailCheck.className = "form-control is-valid"
    }
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    const order = {
      buyer: formValues,
      items: cart,
      total: totalPrice()
    }
    const db = getFirestore()
    const ordersCollection = collection(db, "Orders")
    addDoc(ordersCollection, order)
    .then(({ id }) => setOrderId(id))
    .then(setShoppingList(order))
    updateStock()
    deleteAllFromCart()
  }

  const updateStock = () => {
    const db = getFirestore()

    if (cart.length === 1) {
      cart.map(item => {
        const product = doc(db, "Products", item.id)
        updateDoc(product, { stock: item.stock - item.quantity })
      })
    }
    else {
      cart.map(async item => {
        const product = doc(db, "Products", item.id)
        await runTransaction(db, async (transaction) => {
          await transaction.get(product);
          transaction.update(product, { stock: item.stock - item.quantity });
        })
      })
    }
  }

  console.log(cart)
  console.log(orderId)
  console.log(shoppingList)

  return (
    !orderId ?
      <Container>
        <Form onSubmit={handleOnSubmit}>
          <Row>
            <Form.Group as={Col}>
              <Form.Label>Nombre</Form.Label>
              <Form.Control required name="Nombre" type="text" placeholder="Ingrese su nombre" onChange={handleOnChange} />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Apellido</Form.Label>
              <Form.Control required name="Apellido" type="text" placeholder="Ingrese su apellido" onChange={handleOnChange} />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col}>
              <Form.Label>Tipo de Documento</Form.Label>
              <Form.Select required name="Tipo de Documento" defaultValue="Seleccionar el tipo de documento" onChange={handleOnChange}>
                <option>Seleccionar el tipo de documento</option>
                <option>DNI</option>
                <option>Libreta Civica</option>
                <option>Libreta Enrolamiento</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Numero de Documento</Form.Label>
              <Form.Control required name="Numero de Documento" type="number" placeholder="Ingrese su numero de documento" onChange={handleOnChange} />
            </Form.Group>
          </Row>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control required id="email" name="Email" type="email" placeholder="Ingrese su Email" onChange={handleOnChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Valide su Email</Form.Label>
            <Form.Control required id="emailCheck" name="emailCheck" type="email" placeholder="Ingrese nuevamente su Email" onChange={handleOnChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Telefono</Form.Label>
            <Form.Control required name="Tel" placeholder="Ingrese su numero de telefono" onChange={handleOnChange} />
          </Form.Group>
          <Row>
            <Form.Group as={Col}>
              <Form.Label>Ciudad</Form.Label>
              <Form.Control required name="Ciudad" type="text" placeholder="Ingrese su ciudad" onChange={handleOnChange} />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Provincia</Form.Label>
              <Form.Select required name="Provincia" defaultValue="Selecionar la provincia" onChange={handleOnChange}>
                <option>Seleccionar la provincia</option>
                {provinciasList.map(provincia => <option key={provincia.id}>{provincia.name}</option>)}
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Codigo Postal</Form.Label>
              <Form.Control required name="CP" type="number" placeholder="Ingrese su codigo postal" onChange={handleOnChange} />
            </Form.Group>
          </Row>
          <button type="submit">Finalizar Compra</button>
        </Form>
      </Container>
      :
      <Container>
        <h1>Gracias por su compra</h1>
        <p>Su orden ha sido registrada con el numero de orden {orderId}</p>

        {shoppingList.buyer && Object.values(shoppingList.buyer).map((buyer, index) => <li key={index}> {buyer}</li>)}
        {shoppingList.items.map(item => <li key={item.id}> {item.quantity} {item.name} {item.price}   </li> ) }
        ${shoppingList.total}
        <button onClick={() => navigate("/")}>Volver al Inicio</button>
      </Container>
  );
}