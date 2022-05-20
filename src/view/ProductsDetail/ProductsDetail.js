import React from "react";
import ItemDetailConteiner from "../../Componets/ItemDetailConteiner/ItemDetailConteiner";
import { useParams } from "react-router-dom";
import Header from "../../Componets/Header/Header";
import Footer from "../../Componets/Footer/Footer";


export default function ProductsDetail() {
  const { id } = useParams()

  return (
    <>
      <Header />
      <ItemDetailConteiner productId={id} />
      <Footer />
    </>
  )
}