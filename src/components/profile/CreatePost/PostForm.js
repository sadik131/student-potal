import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useGlobalContex } from '../../authentication/Hook/ReactContex';
import "./PostForm.css"

const PostForm = () => {

    const {user} = useGlobalContex()

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    
    const onSubmit = data =>{
        const userPost = {
            name:user.name,
            email:user.email,
            photoURL:data.photoUrl,
            address:user.address,
            available:data.available,
            discription:data.discription,
            subject:data.subject
        }
        fetch("http://localhost:5000/api/v1/userPost",{
            method:"POST",
            headers: {
                "content-type": "application/json",
            },
            body:JSON.stringify(userPost)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.status === "success"){
                reset()
            }
        })
    }

    return (
       <div className='post-form'>
        <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Create Your Own Job post</h1>

                   <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="name"
                            value={user?.name}
                            disabled
                            placeholder="Enter Your Name"
                            className="input"
                            {...register("name")}
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            value={user?.email}
                            disabled
                            placeholder="Enter Your Email"
                            className="input"
                            {...register("email")}
                        />
                    </div> 
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input
                            type="url"
                            placeholder="Enter Your PhotoUrl"
                            className="input"
                            {...register("photoUrl", {
                                required: {
                                    value: true,
                                    message: "PhotoUrl fild is Required"
                                },
                            })}
                        />
                        <label className="label">
                            {errors.photoUrl?.type === 'required' && <span className='danger-text'>{errors.photoUrl.message}</span>}
                        </label>
                    </div> 
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <input
                            type="address"
                            disabled
                            value={user?.address}
                            placeholder="Enter Your Address"
                            className="input"
                            {...register("address")}
                        />
                    </div> 
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Enter Your available time"
                            className="input"
                            {...register("available", {
                                required: {
                                    value: true,
                                    message: "Available fild is Required"
                                },
                            })}
                        />
                        <label className="label">
                            {errors.available?.type === 'required' && <span className='danger-text'>{errors.available.message}</span>}
                        </label>
                    </div> 
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Subject</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Your Subject"
                            className="input"
                            {...register("subject", {
                                required: {
                                    value: true,
                                    message: "Subject fild is Required"
                                },
                            })}
                        />
                        <label className="label">
                            {errors.subject?.type === 'required' && <span className='danger-text'>{errors.subject.message}</span>}
                        </label>
                    </div> 
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Discription</span>
                        </label>
                        <textarea
                            type="text"
                            placeholder="Enter your Subject Discription"
                            className="input"
                            {...register("discription", {
                                required: {
                                    value: true,
                                    message: "Discription fild is Required"
                                },
                            })}
                        />
                        <label className="label">
                            {errors.discription?.type === 'required' && <span className='danger-text'>{errors.discription.message}</span>}
                        </label>
                    </div> 
                   
                    <input className='submit-btn' type="submit" value="Submit" />
                </form>
       </div>
    );
}

export default PostForm;
