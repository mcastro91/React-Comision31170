import React from "react";
import { Card, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import { CartContext } from "../../Context/CartContext";
import CartCount from "../CartCount/CartCount";

export default function Item({ product }) {

  const [count, setCount] = React.useState(product.quantity);

  const { removeFromCart, removeQuantity, addQuantity } = React.useContext(CartContext)

  return (
    <Card className="cartCard">
      <Link to={`/products/${product.id}`}><Card.Img className="imgCartCard" variant="top" src={product.img} /> </Link>
      <Card.Body >
        <Row className="justify-content-between">
          <Col className="cartCardTitle">
            <Card.Title>{product.name}</Card.Title>
          </Col>
          <Col className="cartCardTitle">
            <Card.Title>${product.price} xUn</Card.Title>
          </Col>
          <Col>
            <CartCount count={count} setCount={setCount} stock={product.stock} removeQuantity={()=> removeQuantity({product})} addQuantity={()=> addQuantity({product })} removeFromCart={()=> removeFromCart({product})} />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}