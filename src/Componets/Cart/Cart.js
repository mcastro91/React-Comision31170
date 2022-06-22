import React from "react";
import { CartContext } from "../../Context/CartContext";
import CartItem from "../../Componets/CartItem/CartItem";
import NavigateButton from "../NavigateButton/NavigateButton";
import { Col, Card, Row } from "react-bootstrap";

export default function Cart() {

  const { cart, deleteAllFromCart, totalPrice } = React.useContext(CartContext)

  return (
    <>
      <h1 className="cartTitle">Mi carrito</h1>
      <div className="cart">
        <Col>
          {cart.map((product) => <CartItem product={product} key={product.id} />)}
          <p className="buttonEmpty" onClick={() => deleteAllFromCart()}>Vaciar carrito</p>
        </Col>
        <Col className="colPurchaseSummary">
          <div className="purchaseSummary">
            <h4 className="purchaseSummaryTitle"> Resumen de compra</h4>
            <div>
              {cart.map((product) => <Row className="purchaseSummaryList">
                <Col><Card.Img className="purchaseSummaryImg" variant="top" src={product.img} /></Col>
                <Col>{product.quantity}</Col>
                <Col xs={6}>{product.name}</Col>
                <Col>${product.quantity * product.price}</Col>
              </Row>)}
            </div>
            <div>
              <Row className="colPurchasePrice">
                <Col xs={4}>
                  <h5>Subtotal:</h5>
                </Col>
                <Col xs={4}>
                  <h5>${totalPrice()}</h5>
                </Col>
              </Row>
              <Row className="colPurchasePrice">
                <Col xs={4}>
                  <h5>Descuentos:</h5>
                </Col>
                <Col xs={4}>
                  <h5>$0</h5>
                </Col>
              </Row>
              <Row className="colPurchasePrice">
                <Col xs={4}>
                  <h5>Total:</h5>
                </Col>
                <Col xs={4}>
                  <h5>${totalPrice()}</h5>
                </Col>
              </Row>
            </div>
            <Row>
              <NavigateButton className="buttonPurchase" text={"Finalizar compra"} path={("/checkout")}></NavigateButton>
              <NavigateButton className="buttonPurchase" text={"Seguir comprando"} path={("/")}></NavigateButton>
            </Row>
          </div>
        </Col>
      </div>
    </>
  )
}