import React from 'react';
import { AiFillDelete } from 'react-icons/ai';

const HiredPage = ({user , doc}) => {
    
    return (
        <div className='hired-profile'>
            <div className='hired-img'>
                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
                <div className='hired-info'>
                    <h3>{user.name}</h3>
                    <h4>location : {user.address}</h4>
                </div>
            </div>
            <div className='skill'>
                <h3>Student Name : {doc.name}</h3>
                <h3>Student Email : {doc.email}</h3>
                <h3>Subject : {doc.subject}</h3>
            </div>
            <div className='sarvices'>
                <p><span className='highLight-text'>{doc.name}</span> Want to Read to you .. He has expressed hid interest to you to acquire knowledge in <span className='highLight-text'>{doc.subject}</span> .. He has expressed his interest to study <span className='highLight-text'>{doc.timeing}</span> ... If you are interested to teach him then contact him as soon as Possible .. Thank You</p>
                <button >Delete<AiFillDelete /></button>
            </div>
        </div>
    );
}

export default HiredPage;
