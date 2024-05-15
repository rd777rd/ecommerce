import React, {useContext} from 'react'
import{useState, useEffect, useRef} from "react";
import { Link } from "react-router-dom";
import {ShoppingCart, List,X} from 'phosphor-react';
import { ShopContext } from '../context/shop-context';
import "@fortawesome/fontawesome-svg-core";
//  import "./dropdown"
import "./navbar.css";
export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsOpen((open) => !open)
    };
    const {productQuantity} = useContext(ShopContext);
    console.log(productQuantity)
    let menuRef = useRef();

    useEffect (() => {
        let handler = (e) =>{
            if(!menuRef.current.contains(e.target)){
            setIsOpen(false);
            console.log(menuRef.current);
        }
    };

    document.addEventListener("mousedown", handler);

    return() => {
        document.removeEventListener("mousedown", handler);
    }

    });
    return (
        <div className="navbar">
        <div className="navbarContainer">
                <h1>Ecommerce</h1>
            <div className="links">
                <Link to="/" className='link'>Shop</Link>
                <Link to="/signup" className='link'>Sign Up</Link>
                <Link to="/login" className='link'>Log In</Link>
                <Link to="/cart" className='link' id="cartIcon"><ShoppingCart /><span>{productQuantity}</span></Link>
            </div>
            <div className="toggle_btn" onClick={toggleMenu}>
            { isOpen ? <X className={`toggleBtnIcon`}/> : <List className={`toggleBtnIcon`}/> }
                         
                    </div> 
        </div>
        <div ref={menuRef} className={`dropDownMenu ${isOpen ? "open" : ""}`}>
            <Link to="/" className=''>Shop</Link>
           <Link to="/signup" className=''>Sign Up</Link>
           <Link to="/login" className='link'>Log In</Link>
            <Link to="/cart" className='' id="cartIcon"><ShoppingCart /><span>{productQuantity}</span></Link>
            </div>
        </div>
        
        
    );
    };

