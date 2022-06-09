import React from "react";
import { CartContext } from "../../Context/CartContext";
import CartItem from "../../Componets/CartItem/CartItem";
import { Container, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Cart() {

  const { cart, deleteAllFromCart, totalPrice } = React.useContext(CartContext)

  const navigate = useNavigate();

  return (
    <Container className="cart">
      <Col>
        {cart.map((product) => <CartItem product={product} key={product.id}  />)}
        <p className="buttonEmpty" onClick={() => deleteAllFromCart()}>Vaciar carrito</p>
      </Col>
      <Col>
        <div className="purchaseSummary">
          <h4 className="purchaseSummaryTitle"> Resumen de compra</h4>
          <div>
            {cart.map((product) => <li className="purchaseSummaryList"> <Card.Img className="purchaseSummaryImg" variant="top" src={product.img} /> {product.quantity} {product.name}${product.quantity * product.price} </li>)}
          </div>
          <h6>Subtotal: ${totalPrice()}</h6>
          <h6>Descuentos: $0</h6>
          <h6>Total: ${totalPrice()}</h6>
          <button className="btn btn-success" onClick={() => navigate("/")}>Seguir comprando</button>
          <button className="btn btn-success" onClick={() => navigate("/checkout")}>Finalizar compra</button>
        </div>
      </Col>
    </Container>
  )
}