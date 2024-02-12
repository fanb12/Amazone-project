import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./page/Landing/Landing";
import Auth from "./page/Auth/Auth";
import Order from "./page/Orders/Order";
import Cart from "./page/Cart/Cart";
import Results from "./page/Results/Results";
import ProductDetail from "./page/ProductDetails/ProductDetail";
import Payment from "./page/Payment/Payment";

function Routing() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Auth" element={<Auth />} />
          <Route path="/Order" element={<Order />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/category/:categoryName" element={<Results />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/payments" element={<Payment />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Routing;
