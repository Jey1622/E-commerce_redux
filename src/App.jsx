import { useState } from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Navebar from "./components/Navebar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import About from "./pages/About";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navebar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
