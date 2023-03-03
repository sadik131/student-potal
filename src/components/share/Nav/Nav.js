import React from 'react';
import "./Nav.css"
import img from "../../../images/logo.jpg"
import { Link } from 'react-router-dom';
import { useGlobalContex } from '../../authentication/Hook/ReactContex';

const Nav = () => {
    const { user , setUser ,setToken} = useGlobalContex()

    const handelLogOut = () => {
        setUser(null)
        setToken(null)
        localStorage.removeItem("accessToken")
    }

    return (
        <div className='nav-container'>
            <Link to="/"><img src={img} alt="" /></Link>
            <div className='link'>
                {user?.roll === "student" &&
                <ul><li><Link to="/home">Home</Link></li></ul> 
            }
            
            {user?.roll === "teacher" &&
            <ul><li><Link to="/hired">Hired Req</Link></li></ul>    
            }
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
