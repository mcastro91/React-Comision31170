import React from "react";
import { Form, Container, Row, Col, Card } from "react-bootstrap";
import { getDocs, collection, getFirestore, addDoc, updateDoc, doc, runTransaction } from "firebase/firestore";
import { CartContext } from "../../Context/CartContext";
import NavigateButton from "../NavigateButton/NavigateButton";

export default function Checkout() {

  const { cart, totalPrice, deleteAllFromCart } = React.useContext(CartContext)

  const [provincesList, setProvincesList] = React.useState([])
  const [formValues, setFormValues] = React.useState([])
  const [orderId, setOrderId] = React.useState()
  const [shoppingList, setShoppingList] = React.useState([])

  React.useEffect(() => {
    const db = getFirestore()
    const provinces = collection(db, "Provincias")
    getDocs(provinces)
      .then(snapshot => {
        setProvincesList(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
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

  const time = () => {
    const date = new Date()
    const hour = date.getHours()
    const minutes = date.getMinutes()
    return `${date.toLocaleDateString()} ${hour}:${minutes}`
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    const order = {
      buyer: formValues,
      items: cart,
      total: totalPrice(),
      status: "Generada",
      date: time()
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

  return (
    !orderId ?
      <Container>
        <h1 className="checkoutTitle">Checkout</h1>
        <Form onSubmit={handleOnSubmit}>
          <Row>
            <Form.Group as={Col}>
              <Form.Label>Nombre</Form.Label>
              <Form.Control required name="name" type="text" placeholder="Ingrese su nombre" onChange={handleOnChange} />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Apellido</Form.Label>
              <Form.Control required name="lastName" type="text" placeholder="Ingrese su apellido" onChange={handleOnChange} />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col}>
              <Form.Label>Tipo de Documento</Form.Label>
              <Form.Select required name="documentType" defaultValue="Seleccionar el tipo de documento" onChange={handleOnChange}>
                <option>Seleccionar el tipo de documento</option>
                <option>DNI</option>
                <option>Libreta Civica</option>
                <option>Libreta Enrolamiento</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Numero de Documento</Form.Label>
              <Form.Control required name="documentNumber" type="number" placeholder="Ingrese su numero de documento" onChange={handleOnChange} />
            </Form.Group>
          </Row>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control required id="email" name="email" type="email" placeholder="Ingrese su Email" onChange={handleOnChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Valide su Email</Form.Label>
            <Form.Control required id="emailCheck" name="emailCheck" type="email" placeholder="Ingrese nuevamente su Email" onChange={handleOnChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Telefono</Form.Label>
            <Form.Control required name="telephone" type="tel" placeholder="Ingrese su numero de telefono" onChange={handleOnChange} />
          </Form.Group>
          <Row>
            <Form.Group as={Col}>
              <Form.Label>Calle</Form.Label>
              <Form.Control required name="street" type="text" placeholder="Ingrese su calle" onChange={handleOnChange} />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Numero</Form.Label>
              <Form.Control required name="address" type="number" placeholder="Ingrese su numero" onChange={handleOnChange} />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Piso</Form.Label>
              <Form.Control name="floor" type="number" placeholder="Ingrese su piso" onChange={handleOnChange} />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Departamento</Form.Label>
              <Form.Control name="flat" type="text" placeholder="Ingrese su departamento" onChange={handleOnChange} />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col}>
              <Form.Label>Ciudad</Form.Label>
              <Form.Control required name="city" type="text" placeholder="Ingrese su ciudad" onChange={handleOnChange} />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Provincia</Form.Label>
              <Form.Select required name="province" defaultValue="Selecionar la provincia" onChange={handleOnChange}>
                <option>Seleccionar la provincia</option>
                {provincesList.map(province => <option key={province.id}>{province.name}</option>)}
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Codigo Postal</Form.Label>
              <Form.Control required name="zip" type="number" placeholder="Ingrese su codigo postal" onChange={handleOnChange} />
            </Form.Group>
          </Row>
          <Row>
            <button className="btn btn-success chechoutButton" type="submit">Finalizar Compra</button>
          </Row>
        </Form>
      </Container>
      :
      <Container>
        <h1 className="orderTitle">Gracias por su compra</h1>
        <div className="orderConteiner">
          <h3>Su orden ha sido registrada con el numero de orden {orderId}</h3>
          <Col>
            <Row>
              <p> Cliente: {shoppingList.buyer.name} {shoppingList.buyer.lastName}</p>
            </Row>
            <Row>
              <p> Email: {shoppingList.buyer.email}</p>
            </Row>
            <Row>
              <p>Telefono: {shoppingList.buyer.telephone} </p>
            </Row>
            <Row>
              <p>Direccion: {shoppingList.buyer.street} {shoppingList.buyer.address} {shoppingList.buyer.floor} {shoppingList.buyer.flat}, {shoppingList.buyer.city}</p>
            </Row>
            <Row>
              <p>Codigo Postal: {shoppingList.buyer.zip}</p>
            </Row>
            <Row>
              <p>Provincia: {shoppingList.buyer.province}</p>
            </Row>
            <Row>
              <p>Fecha:  {shoppingList.date}</p>
            </Row>
          </Col>
          <Col className="orderConteinerCol">
            <h4 className="purchaseSummaryTitle">Tus Productos</h4>
            {shoppingList.items.map((product) => <Row className="purchaseSummaryList">
              <Col><Card.Img className="purchaseSummaryImg" variant="top" src={product.img} /></Col>
              <Col>{product.quantity}</Col>
              <Col xs={6}>{product.name}</Col>
              <Col>${product.quantity * product.price}</Col>
            </Row>)}
            <Row className="orderTotal">
              <Col>Total:</Col>
              <Col>${shoppingList.total}</Col>
            </Row>
          </Col>
        </div>
        <NavigateButton text={"Volver al inicio"} path={("/")}></NavigateButton>
      </Container>
  );
}