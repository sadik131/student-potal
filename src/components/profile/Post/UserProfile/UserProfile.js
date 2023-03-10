import React from 'react';
import "./UserProfile.css"
import { FiEdit2 } from 'react-icons/fi';
import { useGlobalContex } from '../../../authentication/Hook/ReactContex';

const UserProfile = () => {
    const {user} = useGlobalContex()
    
    return (
        <div className='profile'>
            <div className='profile-info'>
                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
                <div className='user-info'>
                    <h3>{user?.name}</h3>
                    <h4>location : {user?.address}</h4>
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
