import React from "react"
import { Card, Row, Col, Container } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount"
import { CartContext } from "../../Context/CartContext";
import { useNavigate } from "react-router-dom";

export default function ItemDetail({ product }) {
  const navigate = useNavigate();

  const [count, setCount] = React.useState(1)

  const { addToCart, removeFromCart, isInCart } = React.useContext(CartContext)

  return (
    <Card style={{ width: '80rem', margin: "5rem" }}>
      <Container>
        <Row>
          <Col>
            <Card.Img className="imgCardDetail" variant="top" src={product.img} />
          </Col>
          <Col>
            <Card.Body className="cardBodyDetail">
              <Row className="titleCardDetail">
                <Card.Title className="titleCardDetailDos">{product.name}</Card.Title>
                <Card.Title className="titleCardDetailDos">${product.price}</Card.Title>
              </Row>
              <Row className="descripcionCardDetail">
                <Card.Text>
                  {product.description}
                </Card.Text>
              </Row>
              <Row>
                {isInCart(product.id) ? <ItemCount text={"Ir al Carrito"} count={count} setCount={setCount} stock={product.stock} onAdd={() => navigate("/cart")} onDecrease={() => removeFromCart({ count, product })}/> : <ItemCount text={"Agregar al carrito"} count={count} setCount={setCount} stock={product.stock} onAdd={() => addToCart({ count, product })} onDecrease={() => removeFromCart({ count, product })}/> }
              </Row>
            </Card.Body>
          </Col>
        </Row>
      </Container>
      <Container className="featuresConteiner">
        {product.features && Object.values(product.features).map((features, index) => <li className="features" key={index}> {features}</li>)}
      </Container>
    </Card>
  )
}