import React, { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faChevronDown, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo.png"

//Framer Motion
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  

  return (
    <>
      <motion.header className="navbar"
        initial={{opacity: 0, y: -50}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.6}}
        viewport={{once: true, amount: 0}}
      >
        <a href="" className="navbar-logo"><img src={logo} alt="logo" /></a>

        <nav className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <a href="#"><span>Home</span></a>
            </li>
            <li><a href="#"><span>About</span></a></li>
            <li onClick={() => setDropdownOpen(!dropdownOpen)}><a href="#"><span>Shop</span><FontAwesomeIcon icon={faChevronDown} className="icon" /></a> 
              <ul className={`dropdown ${dropdownOpen ? "show" : ""}`}>
                <li><a href="#">Shop Now</a></li>
                <li><a href="#">Shop Products</a></li>
              </ul>
            </li>
            <li><a href="#"><span>Blog</span></a></li>
            <li><a href="#"><span>Page</span></a></li>
          </ul>
        </nav>

        <div className="navbar-icons">
          <a href="#" className="icon" onClick={() => setCartOpen(!cartOpen)}><FontAwesomeIcon icon={faCartShopping} /></a>
          <a href="#" className="icon"><FontAwesomeIcon icon={faHeart} /></a>
          <a href="#" className="icon"><FontAwesomeIcon icon={faUser} /></a>
          <span className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>☰</span>
        </div>
      </motion.header> 

      {/* Cart Dropdown */}
      <div className={`cart-dropdown ${cartOpen && "active"}`}>
            <button className="close-btn" onClick={() => setCartOpen(!cartOpen)}><FontAwesomeIcon icon={faTimes} className="icon" /></button>
            <div className="cart-items">
                <div className="cart-header">
                    <h3>your cart</h3>
                    <div>3</div>
                </div>
                <div className="cart-details">
                    <div>
                        <div>
                            <h4>Product one</h4>
                            <p>Brief description</p>
                        </div>
                        <p>$120</p>
                    </div>
                    <div>
                        <div>
                            <h4>Product two</h4>
                            <p>Brief description</p>
                        </div>
                        <p>$120</p>
                    </div>
                    <div>
                        <div>
                            <h4>Product three</h4>
                            <p>Brief description</p>
                        </div>
                        <p>$120</p>
                    </div>
                    <div className="total">
                        <p>Total (USD)</p>
                        <p>$120</p>
                    </div>
                </div>
            </div>
          <button>continue to checkout</button>
        </div>
    </>
  );
};

export default Navbar;
