import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import "./PostForm.css"

const PostForm = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    
    const onSubmit = data =>console.log(data)
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
                            placeholder="Enter Your Name"
                            className="input"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: "Name fild is Required"
                                },
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
                            placeholder="Enter Your Address"
                            className="input"
                            {...register("address", {
                                required: {
                                    value: true,
                                    message: "Address fild is Required"
                                },
                            })}
                        />
                        <label className="label">
                            {errors.address?.type === 'required' && <span className='danger-text'>{errors.address.message}</span>}
                        </label>
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
