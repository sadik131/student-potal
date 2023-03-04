import React, { useEffect, useState } from 'react';
import { useGlobalContex } from '../../authentication/Hook/ReactContex';
import "./Home.css"
import Modal from './modal/Modal';
import TeacherPost from './modal/TeacherPost/TeacherPost';
const Home = () => {
    const { teacherPost, setTeacherPost, user, setUser } = useGlobalContex()
    const [openModal, setOpenModal] = useState(false)
    const [hired, setHired] = useState({})

    useEffect(() => {
        fetch("http://localhost:5000/api/v1/userPost")
            .then(res => res.json())
            .then(data => setTeacherPost(data.data))
    }, [])

    return (
        <>
        <h1 className='heading'>You Have Some Hireing Result</h1>
            {
                teacherPost.map(post => <TeacherPost
                    key={post._id}
                    setOpenModal={setOpenModal}
                    setHired={setHired}
                    openModal={openModal} post={post}></TeacherPost>)
            }

            {openModal && <Modal
                hired={hired}
                setOpenModal={setOpenModal}
                openModal={openModal}></Modal>}
        </>
    );
}

export default Home;
