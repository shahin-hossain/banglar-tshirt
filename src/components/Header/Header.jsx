import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/review">Order Review</Link>
            <Link to="/checkout">About</Link>
            <Link to="/review">Contact</Link>
        </nav>
    );
};

export default Header;