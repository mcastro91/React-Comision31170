import { Container } from "react-bootstrap"
import NavigateButton from "../NavigateButton/NavigateButton"

export default function CartEmpty() {

  return (
    <div className="cartEmpty">
      <Container>
        <h1 className="cartEmptyTitle">Opps!! Tu carrito todavia esta vacio</h1>
        <NavigateButton text={"Empezar a comprar"} path={("/")}></NavigateButton>
      </Container>
    </div>
  )
}