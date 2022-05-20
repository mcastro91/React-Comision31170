import React from "react"
import { Container } from "react-bootstrap"
import { getProducts } from "../../Data/Productos"
import ItemDetail from "../ItemDetail/ItemDetail"
import Loading from "../Loading/Loading"

export default function ItemDetailConteiner({ productId }) {

  const [product, setProduct] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  
  React.useEffect(() => {
    setLoading(true)
    getProducts
      .then((res) => setProduct(res.find(item => item.id === productId)))
      .catch((error) => console.log(error))
      .finally(()=> setLoading(false))
  }, [productId])

  return (
    <Container>
      <div className="itemDetailConteiner">
      {loading ? <Loading/> : <ItemDetail product={product} />}
      </div>
    </Container>
  )
}