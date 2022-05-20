import Header from "../../Componets/Header/Header";
import Footer from "../../Componets/Footer/Footer";
import ItemListConteiner from "../../Componets/ItemListConteiner/ItemListConteiner";

export default function Products() {
  return (
    <>
      <Header />
      <ItemListConteiner title={"Nuestros Productos"} />
      <Footer />
    </>
  )
}