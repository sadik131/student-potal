import React from 'react';
import "./Nav.css"
import img from "../../../images/logo.jpg"
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='nav-container'>
            <Link to="/"><img src={img} alt="" /></Link>
            <div className='link'>
                <ul><li><Link to="/home">Home</Link></li></ul>
                <ul><li><Link to="/login">login</Link></li></ul>
            </div>
        </div>
    );
}

export default Nav;
