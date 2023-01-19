import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { FiShoppingCart, FiUser } from "react-icons/fi";

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="logo">Logo</div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
      <div className="icons">
        <Link to="/cart" className="m-2">
          <FiShoppingCart />
        </Link>
        <Link to="/" className="m-2">
          <FiUser />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
