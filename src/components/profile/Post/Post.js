import React, { useEffect, useState } from 'react';
import { AiFillPlusCircle } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { useGlobalContex } from '../../authentication/Hook/ReactContex';
import "./Post.css"
import SingelPost from './SingelPost/SingelPost';


const Post = () => {
    const { user } = useGlobalContex()
    const [post, setPost] = useState([])
    const navigate = useNavigate()
    console.log(post)

    if(!user){
        navigate("/login")
    }

    useEffect(() => {
        fetch(`http://localhost:5000/api/v1/userPost/${user?.email}`)
            .then(res => res.json())
            .then(data => setPost(data.data))
    }, [user]);

    return (
        <div className='post-container'>
            <div className='post-section'>
                <div className='create-post'>
                    {user?.roll === "teacher" &&<Link to="/postForm"><h2>create a new Post</h2>
                        < AiFillPlusCircle /></Link>}
                </div>
                <div className='post-item'>
                    {!post?.length && <h1>No Post Available For You</h1>}
                    {
                        post.map(p=><SingelPost key={p._id} p={p}></SingelPost>)
                    }
                </div>
            </div>
        </div>
    );
}

export default Post;
