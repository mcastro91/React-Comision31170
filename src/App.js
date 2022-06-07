import { Route, BrowserRouter, Routes } from "react-router-dom"
import { CartProvider } from "./Context/CartContext";
import Home from "./view/Home/Home";
import ProductsDetail from "./view/ProductsDetail/ProductsDetail";
import Products from "./view/Products/Products";
import Category from "./view/Category/Category"
import CartView from "./view/CartView/CartView";
import Checkout from "./view/Checkout/Checkout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <Routes>
            <Route exac path="/" element={<Home />} />
            <Route exac path="/products" element={<Products />} />
            <Route exac path="/products/:id" element={<ProductsDetail />} />
            <Route exac path="/category/:category" element={<Category />} />
            <Route exac path="/cart" element={<CartView />} />
            <Route exac path="/checkout" element={<Checkout />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
