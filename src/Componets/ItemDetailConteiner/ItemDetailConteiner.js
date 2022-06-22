import React from "react"
import { Container } from "react-bootstrap"
import ItemDetail from "../ItemDetail/ItemDetail"
import Loading from "../Loading/Loading"
import NavigateButton from "../NavigateButton/NavigateButton"
import { getDoc, doc, getFirestore } from "firebase/firestore"


export default function ItemDetailConteiner({ productId }) {

  const [product, setProduct] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [noProduct, setNoProduct] = React.useState(false)

  React.useEffect(() => {
    setLoading(true)
    const db = getFirestore()
    const product = doc(db, "Products", productId)
    getDoc(product)
      .then(snapshot => {
        if (snapshot.exists()) {
          setProduct({ id: snapshot.id, ...snapshot.data() })
        } else {
          setNoProduct(true)
        }
      })
      .finally(() => setLoading(false))
  }, [productId])

  return (
    noProduct ?
      <Container>
        <div className="noProduct">
          <h1>No existe el producto indicado</h1>
          <NavigateButton text="Volver al inicio" path={("/")} />
        </div>
      </Container>
      :
      <Container>
        <div >
          {loading ? <Loading /> : <ItemDetail product={product} />}
        </div>
      </Container>
  )
}