import React from 'react';
import { useForm } from 'react-hook-form';
import { useGlobalContex } from '../../../authentication/Hook/ReactContex';
import "./Modal.css"

const Modal = ({ setOpenModal, openModal, hired }) => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    

    const onSubmit = data => {
        const userDoc = {
            name:data.name,
            email:data.email,
            address:data.address,
            timeing:data.timeing,
            subject:data.subject,
            teacherId:hired._id
        }
        fetch("http://localhost:5000/api/v1/studentReq",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(userDoc)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.status === "success"){
                setOpenModal(false)
            }
        })
    }

    return (
        <div className='modal-section'>
            <div onClick={() => setOpenModal(!openModal)}>x</div>
            <h1>You are hireing : {hired?.name}</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Your Name"
                        className="input"
                        {...register("name", {
                            required: {
                                value: true,
                                message: "Name fild is Required"
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className='danger-text'>{errors.name.message}</span>}
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Enter Your Email"
                        className="input"
                        {...register("email", {
                            required: {
                                value: true,
                                message: "Email fild is Required"
                            },
                            pattern: {
                                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                message: 'Enter a valided Email'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className='danger-text'>{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className='danger-text'>{errors.email.message}</span>}
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Subject</span>
                    </label>
                    <input
                        type="subject"
                        placeholder="Enter Your Subject"
                        className="input"
                        {...register("subject", {
                            required: {
                                value: true,
                                message: "Subject fild is Required"
                            }
                        })}
                    />
                    <label className="label">
                        {errors.subject?.type === 'required' && <span className='danger-text'>{errors.subject.message}</span>}
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Address</span>
                    </label>
                    <input
                        type="address"
                        placeholder="Enter Your Address"
                        className="input"
                        {...register("address", {
                            required: {
                                value: true,
                                message: "Address fild is Required"
                            }
                        })}
                    />
                    <label className="label">
                        {errors.address?.type === 'required' && <span className='danger-text'>{errors.address.message}</span>}
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Timing</span>
                    </label>
                    <input
                        type="text"
                        placeholder="ex.10pm - 11pm"
                        className="input"
                        {...register("timeing", {
                            required: {
                                value: true,
                                message: "timing fild is Required"
                            }
                        })}
                    />
                    <label className="label">
                        {errors.subject?.type === 'required' && <span className='danger-text'>{errors.subject.message}</span>}
                    </label>
                </div>
                <input className='submit-btn' type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Modal;
