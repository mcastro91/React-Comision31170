import { Container } from "react-bootstrap"

export default function ItemListConteiner ({title}){
  return(
    <Container>
    <div className="ItemListConteiner">
      <p>{title}</p>
    </div>
    </Container>
  )
}