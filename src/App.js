import { Route, BrowserRouter, Routes } from "react-router-dom"
import Home from "./view/Home/Home";
import ProductsDetail from "./view/ProductsDetail/ProductsDetail";
import Products from "./view/Products/Products";
import Category from "./view/Category/Category"
import Cart from "./view/Cart/Cart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exac path="/" element={<Home />} />
          <Route exac path="/products" element={<Products />} />
          <Route exac path="/products/:id" element={<ProductsDetail />} />
          <Route exac path="/category/:category" element={<Category />} />
          <Route exac path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
