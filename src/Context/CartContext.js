import React from "react";
import { toast } from 'react-toastify';

const CartContext = React.createContext()
const { Provider } = CartContext

const CartProvider = ({ children }) => {

  const [cart, setCart] = React.useState([])

  const addToCart = ({ product, count }) => {
    if (isInCart(product.id)) {
      const newCart = cart.map(cartProduct => {
        if (cartProduct.id === product.id && (cartProduct.quantity + count) <= product.stock) {
          cartProduct.quantity = cartProduct.quantity + count;
          toast.success(`Se agregaron ${count} unidades al carrito`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
        else {
          toast.error('No quedan productos en stock', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
        return cartProduct
      })
      setCart(newCart)
    }
    else {
      setCart([...cart, { ...product, quantity: +count }])
      toast.success(`Se agregaron ${count} unidades al carrito`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }


  const removeFromCart = ({ product, count }) => {
    if (isInCart(product.id)) {

      const newCart = cart.map(cartProduct => {
        (cartProduct.id === product.id && cartProduct.quantity > 1) && (cartProduct.quantity = cartProduct.quantity - count)
        return cartProduct
      })

      const newCart2 = cart.map( cartProduct => cartProduct.id !== product.id  )

      setCart(product.quantity > 1 ? newCart : newCart2)
    }
  }

const deleteAllFromCart = () => {
  setCart([])
}

const isInCart = (id) => {
  return cart.find(product => product.id === id)
}

console.log(cart)

return (
  <Provider value={{
    cart,
    addToCart,
    removeFromCart,
    deleteAllFromCart,
    isInCart
  }}>{children}</Provider>
)
}

export { CartContext, CartProvider }