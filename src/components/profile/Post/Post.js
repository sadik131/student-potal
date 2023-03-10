import React, { useEffect, useState } from 'react';
import { AiFillPlusCircle } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { useGlobalContex } from '../../authentication/Hook/ReactContex';
import "./Post.css"
import SingelPost from './SingelPost/SingelPost';
import StudentPost from './SingelPost/StudentPost';


const Post = () => {

    const { user } = useGlobalContex()
    const [post, setPost] = useState([])
    // student all post is here
    const [spost, setSpost] = useState([])

    const navigate = useNavigate()

    if (!user) {
        navigate("/login")
    }

    // teacher data fetch
    useEffect(() => {
        fetch(`http://localhost:5000/api/v1/userPost/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                if (data.status === "success") {
                    setPost(data.data)
                }
            })
    }, []);

    // student data fetch
    useEffect(() => {
        fetch(`http://localhost:5000/api/v1/studentReq/${user?.email}`)
            .then(res => res.json())
            .then(data => setSpost(data.result))
    }, [user]);
    
    return (
        <div className='post-container'>
            <div className='post-section'>
                <div className='create-post'>
                    {user?.roll === "teacher" && <Link to="/postForm"><h2>create a new Post</h2>
                        < AiFillPlusCircle /></Link>}
                </div>
                <div className='post-item'>
                    {!post?.length && user?.roll === "teacher" && <h1>No Post Available For You</h1>}
                    {user?.roll === "student" && !spost?.length && <h1>You didn't hire any one</h1>}
                    
                    {
                        post?.length &&
                        user?.roll === "teacher" &&
                        post.map(p => <SingelPost key={p._id} p={p}></SingelPost>)
                    }

                    {
                        spost.length &&
                        user?.roll === "student" &&
                        spost.map(p => <StudentPost key={p._id} p={p}></StudentPost>)
                    }
                </div>
            </div>
        </div>
    );
}

export default Post;
