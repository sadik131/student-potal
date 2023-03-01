import React from 'react';
import "./Nav.css"
import img from "../../../images/logo.jpg"
import { Link } from 'react-router-dom';
import { useGlobalContex } from '../../authentication/Hook/ReactContex';

const Nav = () => {
    const { user , setUser} = useGlobalContex()

    const handelLogOut = () => {
        setUser(null)
    }

    return (
        <div className='nav-container'>
            <Link to="/"><img src={img} alt="" /></Link>
            <div className='link'>
                <ul><li><Link to="/home">Home</Link></li></ul>
                {user && <ul><li><Link to="/profile">Profile</Link></li></ul>}
                <ul><li>
                    {user ? <button
                        onClick={handelLogOut} className='signout-btn'>SignOut</button> : <Link to="/login">login</Link>}
                </li></ul>
            </div>
        </div>
    );
}

export default Nav;
