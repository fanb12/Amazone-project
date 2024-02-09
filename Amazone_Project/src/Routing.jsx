import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./page/Landing/Landing";
import Signup from "./page/Auth/Signup";
import Order from "./page/Orders/Order";
import Cart from "./page/Cart/Cart";
import Results from "./page/Results/Results";
import ProductDetail from "./page/ProductDetails/ProductDetail";

function Routing() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Auth" element={<Signup />} />
          <Route path="/Order" element={<Order />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/category/:categoryName" element={<Results />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Routing;
