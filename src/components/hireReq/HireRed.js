import React, { useEffect, useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useGlobalContex } from '../authentication/Hook/ReactContex';
import HiredPage from './HiredPage';
import "./HireRed.css"

const HireRed = () => {
    const { user } = useGlobalContex()
    const [teacherDoc, setTeacherDoc] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/api/v1/teacherHireRoute/${user?.email}`)
            .then(req => req.json())
            .then(data => setTeacherDoc(data.hireDoc))
    }, [])

    
    return (
        <div className='hired-user'>
            <h1>You Are hire by this Users</h1>
            {teacherDoc ?
                teacherDoc.map(doc=><HiredPage key={doc._id} user={user} doc={doc}></HiredPage>)
                :
                <h1>{user.name} You Don't have any hired Request <Link to="/postForm">Create a New Post</Link></h1>
                
            }
        </div>
    );
}

export default HireRed;
