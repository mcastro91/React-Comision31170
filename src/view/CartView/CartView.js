import React from "react";
import Footer from "../../Componets/Footer/Footer";
import Header from "../../Componets/Header/Header";
import { CartContext } from "../../Context/CartContext";
import CartEmpty from "../../Componets/CartEmpty/CartEmpty";
import Cart from "../../Componets/Cart/Cart";


export default function CartView() {

  const { cart } = React.useContext(CartContext)

  return (
    <>
      <Header />
      {(cart.length === 0) ? <CartEmpty/> : <Cart/>}
      <Footer />
    </>
  )
}