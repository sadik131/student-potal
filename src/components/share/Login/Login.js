import React from 'react';
import { useForm } from 'react-hook-form';
import "./Login.css"

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = data => console.log(data);

    return (
        <div className='login-container'>
            <div className='login-form'>
                <h1>Login</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            class="input"
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
                        <label class="label">
                            {errors.email?.type === 'required' && <span className='danger-text'>{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className='danger-text'>{errors.email.message}</span>}
                        </label>


                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Type here"
                                class="input input-bordered w-full max-w-xs"
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
                            <label class="label">
                                {errors.password?.type === 'required' && <span className='danger-text'>{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className='danger-text'>{errors.password.message}</span>}
                            </label>
                        </div>


                    </div>
                    <input className='login-btn' type="submit" value="Login" />
                    <p className='forget'>forget Password?</p>
                    <p className='create'>Create a new Account?</p>
                </form>
            </div>
        </div>
    );
}

export default Login;
