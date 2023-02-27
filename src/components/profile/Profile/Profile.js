import React from 'react';
import "./Profile.css"

import UserProfile from '../Post/UserProfile/UserProfile';
import Post from '../Post/Post';


const Profile = () => {
    return (
        <div className='profile-Container'>
            <UserProfile></UserProfile>
            <Post></Post>
        </div>
    );
}

export default Profile;
