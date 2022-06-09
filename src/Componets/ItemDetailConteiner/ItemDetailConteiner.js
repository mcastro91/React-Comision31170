import React from "react"
import { Container } from "react-bootstrap"
import ItemDetail from "../ItemDetail/ItemDetail"
import Loading from "../Loading/Loading"
import { getDoc, doc, getFirestore} from "firebase/firestore"


export default function ItemDetailConteiner({ productId }) {

  const [product, setProduct] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  
  React.useEffect(() => {
    setLoading(true)
    const db = getFirestore()
    const product = doc(db, "Products", productId)
    getDoc(product)
    .then(snapshot => {
      setProduct({id: snapshot.id, ...snapshot.data()})})
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