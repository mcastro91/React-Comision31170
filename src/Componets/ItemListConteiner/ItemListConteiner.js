import React from "react"
import { Container } from "react-bootstrap"
import ItemList from "../ItemList/ItemList"
import Loading from "../Loading/Loading"
import { getDocs, collection, getFirestore, query, where } from "firebase/firestore"

export default function ItemListConteiner({ title, category }) {

  const [productsList, setProductsList] = React.useState([])
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    setLoading(true)
    const db = getFirestore()
    if (category) {
      const categoryfilter = query(collection(db, "Products"), where("category", "==", category))
      getDocs(categoryfilter)
        .then(snapshot => {
          setProductsList(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
        })
        .finally(() => setLoading(false))
    }
    else {
      const products = collection(db, "Products")
      getDocs(products)
        .then(snapshot => {
          setProductsList(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
        })
        .finally(() => setLoading(false))
    }
  }, [category])

  return (
    <Container>
      <div className="itemListConteiner">
        <h1 className="titleLisConteiner" >{title}</h1>
        {loading ? <Loading /> : <ItemList productsList={productsList} />}
      </div>
    </Container>
  )
}