import React from "react";
import { toast } from 'react-toastify';

const CartContext = React.createContext()
const { Provider } = CartContext

const CartProvider = ({ children }) => {

  const [cart, setCart] = React.useState([])

  const addToCart = ({ product, count }) => {
    if (isInCart(product.id)) {
      const updateCart = cart.map(cartProduct => {
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
      setCart(updateCart)
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

  const addQuantity = ({ product }) => {

    if (isInCart(product.id)) {
      const updateCart = cart.map(cartProduct => {
        (cartProduct.id === product.id) && (cartProduct.quantity = cartProduct.quantity + 1)
        return cartProduct
      })
      setCart(updateCart)
    }
  }

  const removeQuantity = ({ product }) => {

    if (isInCart(product.id) && cart.find(product => product.quantity > 1)) {
      const updateCart = cart.map(cartProduct => {
        (cartProduct.id === product.id) && (cartProduct.quantity = cartProduct.quantity - 1)
        return cartProduct
      })
      setCart(updateCart)
    }
  }

  const totalQuantity = () => {
    let total = 0;
    cart.map(product => total = total + product.quantity)
    return total
  }

  const totalPrice = () => {
    return cart.reduce((total, product) => total + (product.price * product.quantity), 0)
  }

  const removeFromCart = ({ product }) => {
    setCart(cart.filter(cartProduct => cartProduct.id !== product.id))
    toast(`Se elimino ${product.name} del carrito`)
  }

  const deleteAllFromCart = () => {
    setCart([])
  }

  const isInCart = (id) => {
    return cart.find(product => product.id === id)
  }

  return (
    <Provider value={{
      cart,
      addToCart,
      addQuantity,
      removeQuantity,
      removeFromCart,
      deleteAllFromCart,
      isInCart,
      totalQuantity,
      totalPrice
    }}>
      {children}
    </Provider>
  )
}

export { CartContext, CartProvider }