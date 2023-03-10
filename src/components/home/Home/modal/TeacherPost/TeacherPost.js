import React from 'react';

const TeacherPost = ({ post, setOpenModal, setHired, openModal }) => {

    return (
        <div>
            <div key={post._id} className='Teacher-post'>
                <div className='teacher-profile'>
                    <div className='teacher-img'>
                        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
                        <div className='teacher-info'>
                            <h3>{post.name}</h3>
                            <h4>location : {post.address}</h4>
                        </div>
                    </div>
                    <div className='skill'>
                        <h3>Available time : {post.available}Hr</h3>
                        <h3>Subject : {post.subject}</h3>
                        <h4>{post.createdAt}</h4>
                    </div>
                    <div className='teacher-sarvices'>
                        <p>{post.discription}</p>
                        <button onClick={() =>{
                            setHired(post)
                            setOpenModal(!openModal)
                        } } className='hire'>Hire</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeacherPost;
