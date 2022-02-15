import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./Cart"
import Header from "./Header";
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
function App() {
  return (
    <div>
      <Header/>
      <Routes>
      <Route path="/" exact element={<Home/>} />
        <Route path="/about" exact element={<About/>} />
        <Route path="/contact" exact element={<Contact/>}/>
        <Route path="/cart" exact element={<Cart/>} />
      </Routes>
    </div>
  );
}


export default App;
