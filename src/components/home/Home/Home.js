import React, { useEffect, useState } from 'react';
import { useGlobalContex } from '../../authentication/Hook/ReactContex';
import "./Home.css"
import Modal from './modal/Modal';
import TeacherPost from './modal/TeacherPost/TeacherPost';
const Home = () => {
    const { teacherPost, setTeacherPost } = useGlobalContex()
    const [openModal, setOpenModal] = useState(false)
    const [hired, setHired] = useState({})

    useEffect(() => {
        fetch("http://localhost:5000/api/v1/userPost")
            .then(res => res.json())
            .then(data => setTeacherPost(data.data))
    }, [])
    return (
        <>
            {
                teacherPost.map(post => <TeacherPost
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
