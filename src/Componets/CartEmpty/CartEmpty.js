import { Container } from "react-bootstrap"
import { useNavigate } from "react-router-dom";

export default function CartEmpty() {

  const navigate = useNavigate();
  return (
    <div className="cartEmpty">
      <Container>
        <h1 className="cartEmptyTitle">Opps!! Tu carrito todavia esta vacio</h1>
        <button className="btn btn-success" onClick={() => navigate("/")}>Empezar a comprar</button>
      </Container>
    </div>
  )
}