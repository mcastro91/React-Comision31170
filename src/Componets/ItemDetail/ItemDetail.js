import { Card, Row, Col, Container } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";

export default function ItemDetail({ product, features }) {
  return (

    <Card style={{ width: '80rem' }}>
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
        <Container>
          <Row className="features">
            <Col>
              <li>{features.featuresOne}</li>
              <li>{features.featuresTwo}</li>
              <li>{features.featuresThree}</li>
              <li>{features.featuresFour}</li>
            </Col>
            <Col >
              <li>{features.featuresFive}</li>
              <li>{features.featuresSix}</li>
              <li>{features.featuresSeven}</li>
              <li>{features.featuresEight}</li>
            </Col>
          </Row>
        </Container>
      </Container>
    </Card>

  )
}