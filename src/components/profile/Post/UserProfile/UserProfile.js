import React from 'react';
import "./UserProfile.css"
import { FiEdit2 } from 'react-icons/fi';

const UserProfile = () => {
    return (
        <div className='profile'>
            <div className='profile-info'>
                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
                <div className='user-info'>
                    <h3>Salatus Sadik</h3>
                    <h4>location : Gaibandha</h4>
                </div>
            </div>
            <div className='profile-bio'>
                <p>Hello I am a web devloper</p>
                <FiEdit2 />
            </div>
        </div>
    );
}

export default UserProfile;
