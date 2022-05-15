import React from "react"
import { Container } from "react-bootstrap"
import { getProducts } from "../../Data/Productos"
import ItemDetail from "../ItemDetail/ItemDetail"

export default function ItemDetailConteiner() {

  const [productsList, setProductsList] = React.useState([])

  const [productsFeatures, setProductsFeatures] = React.useState([])

  React.useEffect(() => {
    getProducts
      .then((res) => setProductsList(res[0]))
      .catch((error) => console.log(error))
  }, [])

  React.useEffect(() => {
    getProducts
      .then((res) => setProductsFeatures(res[0].features))
      .catch((error) => console.log(error))
  }, [])

  
  return (
    <Container>
      <div>
        <ItemDetail product={productsList} key={productsList.id} features={productsFeatures} />
      </div>
    </Container>
  )
}