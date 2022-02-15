import React from "react"
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown  from "react-bootstrap/Dropdown";
function Header() {
  const CARDCOUNTER = useSelector(state=>state.CARDCOUNTER);
  console.log(CARDCOUNTER)
  return(
    <header>
      <section className="container">
        <div className="dropdown">
        <Dropdown>
          <Dropdown.Toggle variant="none" id="dropdown-basic">
            Dropdown
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1"><Link to="/" className="ancher" >Home</Link></Dropdown.Item>
            <Dropdown.Item href="#/action-2"><Link to="/about" className="ancher">About</Link></Dropdown.Item>
            <Dropdown.Item href="#/action-3"><Link to="/contact" className="ancher">Contact</Link></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        </div>
          <section className="manu_container">
            <Link to="/" className="ancher" >Home</Link>
            <Link to="/about" className="ancher">About</Link>
            <Link to="/contact" className="ancher">Contact</Link>
          </section>
        <Link to="/cart" className="ancher">Cart:{CARDCOUNTER}</Link>
      </section>
      <div className="hr" />
    </header> 
  )
}
export default Header