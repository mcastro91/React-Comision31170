import { Card, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function Item({ product }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Link to={`/products/${product.id}`}><Card.Img className="imgCard" variant="top" src={product.img} /> </Link>
      <Card.Body>
        <Row className="titleCard">
          <Card.Title>{product.name}</Card.Title>
          <Card.Title>${product.price}</Card.Title>
        </Row>
        <Row className="descripcionCard">
          <Card.Text>
            {product.description}
          </Card.Text>
        </Row>
      </Card.Body>
    </Card>
  )
}