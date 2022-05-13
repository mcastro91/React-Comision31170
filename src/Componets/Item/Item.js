import { Card, Row } from "react-bootstrap"
import ItemCount from "../ItemCount/ItemCount"


export default function Item({producto}) {
  return(
    <Card style={{ width: '18rem' }}>
  <Card.Img className="imgCard" variant="top" src={producto.img} />
  <Card.Body>
  <Row className="titleCard">
    <Card.Title>{producto.name}</Card.Title>
    <Card.Title>${producto.price}</Card.Title>
    </Row>
    <Row  className="descripcionCard">
    <Card.Text>
      {producto.description}
    </Card.Text>
    </Row>
    <ItemCount className="itemCount" stock={producto.stock} initial={1} />
  </Card.Body>
</Card>
  )
}