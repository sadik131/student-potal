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
    
    if(!user){
        navigate("/login")
    }

    useEffect(() => {
        fetch(`http://localhost:5000/api/v1/userPost/${user?.email}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [user]);

    return (
        <div className='post-container'>
            <div className='post-section'>
                <div className='create-post'>
                    {user?.roll === "teacher" &&<Link to="/postForm"><h2>create a new Post</h2>
                        < AiFillPlusCircle /></Link>}
                </div>
                <div className='post-item'>
                    {!post?.data?.length && <h1>No Post Available For You</h1>}
                    {/* {
                        post.map(p=>console.log(p))
                    } */}
                </div>
            </div>
        </div>
    );
}

export default Post;
