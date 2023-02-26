import React from 'react';
import "./Nav.css"
import img from "../../../images/logo.jpg"

const Nav = () => {
    return (
        <div className='nav-container'>
            <img src={img} alt="" />
            <div className='link'>
                <ul><li><a href="*">Home</a></li></ul>
                <ul><li><a href="*">login</a></li></ul>
            </div>
        </div>
    );
}

export default Nav;
