import React from 'react'
import { Link } from 'react-router-dom';

import './NavBar.css'

export default function NavBar() {
  return (
    <>
    <nav className='nav-container container-fluid'>
        <div className="container nav-div d-flex h-100">
            <ul className='d-flex navItems'>
                <Link to="/"><li>Home</li></Link>
                <Link to="/about"><li>About Us</li></Link>
                <Link to="/contact"><li>Contact Us</li></Link>
                <Link to="/portfolio"><li>Portfolio</li></Link>
                <Link to="/products"><li>Products</li></Link>
            </ul>
        </div>
    </nav>
    </>
  );
}
