import React from "react"
import { Card, Row, Col, Container } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount"
import { CartContext } from "../../Context/CartContext";
import { useNavigate } from "react-router-dom";

export default function ItemDetail({ product }) {
  const navigate = useNavigate();

  const [count, setCount] = React.useState(1)

  const { addToCart, isInCart } = React.useContext(CartContext)

  return (
    <Card className="cardItem">
      <Container>
        <Row>
          <Col>
            <Card.Img className="imgCardDetail" variant="top" src={product.img} />
          </Col>
          <Col>
            <Card.Body className="cardBodyDetail">
              <Row className="titleCardDetailRow">
                <Card.Title className="titleCardDetail">{product.name}</Card.Title>
                <Card.Title className="titleCardDetail">${product.price}</Card.Title>
              </Row>
              <Row className="descripcionCardDetail">
                <Card.Text>
                  {product.description}
                </Card.Text>
              </Row>
              <Row>
                {<ItemCount text={isInCart(product.id) ? "Finalizar Compra" : "Agregar al carrito"} count={count} setCount={setCount} stock={product.stock} onClick={isInCart(product.id) ? () => navigate("/cart") : () => addToCart({ count, product })} />}
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