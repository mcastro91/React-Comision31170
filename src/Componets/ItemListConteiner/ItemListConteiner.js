import React from "react"
import { Container } from "react-bootstrap"
import { getProducts } from "../../Data/Productos"
import ItemList from "../ItemList/ItemList"

export default function ItemListConteiner({ title }) {

  const [productsList, setProductsList] = React.useState([])

  React.useEffect(() => {
    getProducts
      .then((res) => setProductsList(res))
      .catch((error) => console.log(error))

  }, [])

  return (
    <Container>
      <div className="ItemListConteiner">
        <h1>{title}</h1>
        <ItemList productsList={productsList} />
      </div>
    </Container>
  )
}