import { Card, Row, Col, Container } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount"

export default function ItemDetail({ product }) {
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
                <ItemCount stock={product.stock} initial={1} />
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