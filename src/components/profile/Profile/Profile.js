import React from 'react';
import "./Profile.css"

import UserProfile from '../Post/UserProfile/UserProfile';
import Post from '../Post/Post';
import { Navigate, useNavigate } from 'react-router-dom';
import { useGlobalContex } from '../../authentication/Hook/ReactContex';


const Profile = () => {
    
    return (
        <div className='profile-Container'>
            <UserProfile></UserProfile>
            <Post></Post>
        </div>
    );
}

export default Profile;
