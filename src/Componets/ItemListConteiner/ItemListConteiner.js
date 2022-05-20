import React from "react"
import { Container } from "react-bootstrap"
import { getProducts } from "../../Data/Productos"
import ItemList from "../ItemList/ItemList"
import Loading from "../Loading/Loading"

export default function ItemListConteiner({ title, category }) {

  const [productsList, setProductsList] = React.useState([])
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    setLoading(true)
    getProducts
      .then((res) => category ? setProductsList(res.filter(item => item.category === category)) : setProductsList(res))
      .catch((error) => console.log(error))
      .finally(()=> setLoading(false))
  }, [category])

  return (
    <Container>
      <div className="itemListConteiner">
        <h1 className="titleLisConteiner" >{title}</h1>
        {loading ? <Loading/> : <ItemList productsList={productsList} />}
      </div>
    </Container>
  )
}