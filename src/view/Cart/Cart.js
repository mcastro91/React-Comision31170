import React from "react";
import Footer from "../../Componets/Footer/Footer";
import Header from "../../Componets/Header/Header";
import { CartContext } from "../../Context/CartContext";
import Item from "../../Componets/Item/Item";


export default function Cart() {

  const { cart } = React.useContext(CartContext)

  return (
    <>
      <Header />
      {cart.map((product) => <Item product={product} key={product.id} />)}
      <Footer />
    </>
  )
}