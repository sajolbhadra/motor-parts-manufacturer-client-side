import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init.js';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';



const SignIn = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const navigate = useNavigate();
      const location = useLocation();
      let from = location.state?.from?.pathname || "/";


      if(loading || googleLoading){
        return <div className='flex justify-center items-center h-screen'>
            <button className="btn btn-square loading "></button>
        </div>
      }
      let errorMessage;
      if(error || googleError){
          errorMessage = error?.message
      }

    if (user || googleUser) {
        console.log(user)
        navigate(from, { replace: true });
        // navigate('/')
    }
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
        // console.log(data);
    }

    return (
        <div >
            <div className="card w-100 bg-base-100 shadow-xl flex  justify-center items-center py-9">
                <div className="card-body">
                    <h2 className=" text-center text-3xl font-bold">Sign In</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Enter Your Email'
                                },
                                pattern: {
                                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                                    message: 'Email Not Valid'
                                }
                            })}
                                type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors?.email?.type === "required" && <span className="label-text-alt text-red-800">{error?.email?.message}</span>}
                                {errors?.email?.type === "pattern" && <span className="label-text-alt text-red-800">{error?.email?.message}</span>}
                            </label>
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Enter Your Password'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Enter atleast 6 Digit password' // JS only: <p>error message</p> TS only support string
                                }
                            })}
                                type="password" placeholder="Enter Password" className="input input-bordered w-full max-w-xs" />

                            <label className="label">
                                {errors?.password?.type === 'required' && <span className="label-text-alt text-red-800">{error?.password?.message}</span>}
                                {errors?.password?.type === 'minLength' && <span className="label-text-alt text-red-800">{error?.password?.message}</span>}
                                {error?.message && <span className="label-text-alt text-red-800">{error?.message}</span>}
                            </label>
                        </div>
                        <input className='btn w-full w-xs' type="submit" value="Sign In"/>
                    </form>
                    <div className="divider">OR</div>
                    <div className='flex'>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline btn-primary mx-2"
                    >Sign With Google</button>
                    
                    <Link to="/sign-up" className="btn btn-outline btn-primary mx-2">Sign With Email</Link>       
                    </div>
                    {/* <p>Signed In User: {user?.email}</p> */}
                </div>
            </div>
        </div>
    );
};

export default SignIn;