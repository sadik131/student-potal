import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useGlobalContex } from '../../authentication/Hook/ReactContex';
import "./Signup.css"

const Signup = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const { user, setUser, wrong, setWrong, } = useGlobalContex()
    const navigate = useNavigate()

    const onSubmit = data => {
        const { name, email, password, address, radio: roll } = data;
        const userDoc = {
            name,
            email,
            password,
            address,
            roll
        }
        fetch("http://localhost:5000/api/v1/user", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(userDoc)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.status) {
                    setUser(data.data)
                    reset()
                    navigate("/login")
                }
                else {
                    setWrong()
                }
            })
    };

    return (
        <div className='login-container'>
            <img src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7863.jpg?w=740&t=st=1677426372~exp=1677426972~hmac=25d6739d56bf9ab7fa8835895c425e0ebbe9865a9f7c64aab1515874dc1765bb" alt="" />
            <div className='login-form'>
                <h1>Sign in</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='signin-form'>
                        <div>
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input
                                type="Name"
                                placeholder="Enter Your full Name"
                                className="input"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Name fild is Required"
                                    },
                                    minLength: {
                                        value: 5,
                                        message: "Name Must be in 5 character"
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className='danger-text'>{errors.name.message}</span>}
                                {errors.name?.type === 'minLength' && <span className='danger-text'>{errors.name.message}</span>}
                            </label>
                        </div>

                        <div>
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
                        <div>
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Enter Your Password"
                                className="input"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "password fild is Required"
                                    },
                                    minLength: {
                                        value: 5,
                                        message: "Password must be in 5 character"
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className='danger-text'>{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className='danger-text'>{errors.password.message}</span>}
                            </label>
                        </div>
                        <div>
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
                                        message: "address fild is Required"
                                    },
                                })}
                            />
                            <label className="label">
                                {errors.address?.type === 'required' && <span className='danger-text'>{errors.address.message}</span>}
                            </label>
                        </div>
                    </div>
                    <div className='radio-section'>
                        <label className="radio-label">
                            <span className="label-text">Title :</span>
                        </label>
                        <div className='radio-item'>
                            <input
                                type="radio"
                                name="title"
                                value="student"
                                className="radio"
                                {...register("radio", {
                                    required: {
                                        value: true,
                                        message: "radio fild is Required"
                                    },
                                })}
                            />
                            <p className='radio-text'>Student/user</p>
                        </div>
                        <div className='radio-item'>
                            <input
                                type="radio"
                                name="title"
                                value="teacher"
                                className="radio"
                                {...register("radio", {
                                    required: {
                                        value: true,
                                        message: "radio fild is Required"
                                    },
                                })}
                            />
                            <p className='radio-text'>Teacher</p>
                        </div>
                        <label className="label">
                            {errors.radio?.type === 'required' && <span className='danger-text'>{errors.radio.message}</span>}
                        </label>

                    </div>
                    { }
                    <input className='login-btn' type="submit" value="Signin" />
                    <p className='forget'>forget Password?</p>
                    <p className='create'>All ready have an account <Link to="/login">Login</Link></p>
                </form>
            </div>
        </div>
    );
}

export default Signup;
