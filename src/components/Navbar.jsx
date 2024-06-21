import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Navbar() {
    const items=useSelector((state)=>state.cart.cartItems)
    const len=items.length;
    return (
        <nav className="navbar fixed-top mb-4 bg-body-tertiary">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">Ecomx</Link>
                <Link to='/cart' className='text-decoration-none' href=""><h5>Cart ({len})</h5></Link>
            </div>
        </nav>
    );
}

export default Navbar;
