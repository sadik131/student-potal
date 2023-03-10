import React from 'react';
import { AiFillDelete } from 'react-icons/ai';

const SingelPost = ({p}) => {

    const deletePost =(id)=>{
        fetch(`http://localhost:5000/api/v1/userPost/${id}`,{
            method:"DELETE"
        })
          .then(res=>res.json())
          .then(data=>console.log(data))
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
            <div className='skill'>
                <h3>Available time : {p.available}hr</h3>
                <h3>Subject : {p.subject}</h3>
                <h4>29 dec</h4>
            </div>
            <div className='sarvices'>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first</p>
                <button onClick={()=>deletePost(p._id)}>Delete<AiFillDelete /></button>
            </div>
        </div>
    );
}

export default SingelPost;
