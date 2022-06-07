import React from "react";
import { CartContext } from "../../Context/CartContext";
import CartItem from "../../Componets/CartItem/CartItem";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Cart() {

  const { cart, deleteAllFromCart, totalPrice } = React.useContext(CartContext)

  const navigate = useNavigate();

  return (
    <Container className="cart">
      {cart.map((product) => <CartItem product={product} key={product.id} />)}
      <p className="buttonEmpty" onClick={() => deleteAllFromCart()}>Vaciar carrito</p>
      <div className="purchaseSummary">
        <h4 className="purchaseSummaryTitle"> Resumen de compra</h4>
        <div className="prueba">
        {cart.map((product) => <li className="purchaseSummaryList"> {product.quantity} {product.name}${product.quantity * product.price} </li>)}
        </div>
        <h6>Subtotal: ${totalPrice()}</h6>
        <h6>Descuentos: $0</h6>
        <h6>Total: ${totalPrice()}</h6>
      </div>
      <button className="btn btn-success" onClick={()=> navigate("/")}>Seguir comprando</button>
      <button className="btn btn-success" onClick={()=> navigate("/checkout")}>Finalizar compra</button>
    </Container>
  )
}