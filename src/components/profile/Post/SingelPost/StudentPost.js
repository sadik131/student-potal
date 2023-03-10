import React from 'react';
import { AiFillDelete } from 'react-icons/ai';

const StudentPost = ({ p }) => {
console.log(p)
    const deletePost = (id) => {
        fetch(`http://localhost:5000/api/v1/userPost/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div className='user-profile'>
            <div className='user-img'>
                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
                <div className='user-info'>
                    <h3>{p?.name}</h3>
                    <h4>location : {p?.address}</h4>
                </div>
            </div>
            <div className='sarvices'>
                <p>Hello <span className='highLight-text'> {p?.name} </span>.. You are hireing <span className='highLight-text'> {p?.teacherId.name}</span> for the <span className='highLight-text'> {p?.subject} </span>subject ... And you also want to read on this <span className='highLight-text'> {p?.timeing} </span>time... <span className='highLight-text'> {p?.teacherId.name}</span> Teacher got your request and he will knock you in few days ... Hope you clear and Thankyou for being with us </p>
                <button onClick={() => deletePost(p._id)}>Delete<AiFillDelete /></button>
            </div>
        </div>
    );
}

export default StudentPost;
