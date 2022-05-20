import Footer from "../../Componets/Footer/Footer";
import Header from "../../Componets/Header/Header";
import ItemListConteiner from "../../Componets/ItemListConteiner/ItemListConteiner";
import { useParams } from "react-router-dom";

export default function Category() {

  const { category } = useParams();

  return (
    <>
      <Header />
      <ItemListConteiner title={category} category={category} />
      <Footer />
    </>
  )
}