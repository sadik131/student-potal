import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import "./Login.css"

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = data => console.log(data);

    return (
        <div className='login-container'>
            <img src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7863.jpg?w=740&t=st=1677426372~exp=1677426972~hmac=25d6739d56bf9ab7fa8835895c425e0ebbe9865a9f7c64aab1515874dc1765bb" alt="" />
            <div className='login-form'>
                <h1>Login</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
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


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "password fild is requerd"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: "Use 6 carecter in password or more"
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className='danger-text'>{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className='danger-text'>{errors.password.message}</span>}
                            </label>
                        </div>


                    </div>
                    <input className='login-btn' type="submit" value="Login" />
                    <p className='forget'>forget Password?</p>
                    <Link to="/signup" className='create'>Create a new Account?</Link>
                </form>
            </div>
        </div>
    );
}

export default Login;
