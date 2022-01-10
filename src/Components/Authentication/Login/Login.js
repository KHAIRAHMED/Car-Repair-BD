import React, { useEffect, useState, useContext } from 'react';
import { useForm } from "react-hook-form";
import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import "./Login.css"
import { auth } from './firebase.config';
import { userContext } from '../../../App';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const [hideName, setHideName] = useState(false)
    const [errorSuccess, setErrorSuccess] = useState({
        success: true,
        error: false,
    })
    const [userLoggedIn, setUserLoggedIn] = useContext(userContext)
    const { register, handleSubmit, formState: { errors } } = useForm();

    let location = useLocation();
    let navigate = useNavigate();
    let { from } = location.state || { from: { pathname: "/" } };

    useEffect(() => {
        if (userLoggedIn?.email) {
            navigate(from)
        }
    }, [userLoggedIn, from, navigate])
    //Google SignIn 
    const googleSignIn = () => {
        const googleProvider = new GoogleAuthProvider()
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUserLoggedIn(user)
                // idToken()
                navigate(from)


                // error handling 
                let errMess = { ...errorSuccess }
                errMess.success = true
                errMess.error = false
                setErrorSuccess(errMess)
            }).catch((error) => {
                let errMess = { ...errorSuccess }
                errMess.success = false
                errMess.error = error.message
                setErrorSuccess(errMess)
            });
    }
    // google sign up update name 

    const updateName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name,
        })
    }
    // submit login form 
    const onSubmit = data => {
        const { name, email, password } = data
        if (!hideName && name && email && password) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    updateName(name)
                    const user = userCredential.user;
                    setUserLoggedIn(user)
                    // idToken()
                    navigate(from)

                    // error handling 
                    let errMess = { ...errorSuccess }
                    errMess.success = true
                    errMess.error = false
                    setErrorSuccess(errMess)
                })
                .catch((error) => {
                    let errMess = { ...errorSuccess }
                    errMess.success = false
                    errMess.error = error.message
                    setErrorSuccess(errMess)
                });
        }
        else if (hideName && email && password) {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    setUserLoggedIn(user)
                    // idToken()
                    navigate(from)

                    // error handling 
                    let errMess = { ...errorSuccess }
                    errMess.success = true
                    errMess.error = false
                    setErrorSuccess(errMess)
                })
                .catch((error) => {
                    let errMess = { ...errorSuccess }
                    errMess.success = false
                    errMess.error = error.message
                    setErrorSuccess(errMess)
                });
        }
    }

    // state change 
    // const idToken = () => {
    //     auth.currentUser.getIdToken(true)

    //         .then(function (idToken) {
    //             localStorage.setItem("token", idToken)
    //         })
    //         .catch(function (error) {

    //         });
    // }


    return (
        <div className="d-flex justify-content-center" >
            <div className="row" >
                <div className="mb-5 w-100 d-flex justify-content-center"  >
                    <div>
                        <form className="login-left-side p-5" onSubmit={handleSubmit(onSubmit)} >
                            <div className=" form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" onClick={() => setHideName(!hideName)} />
                                <label className="form-check-label" for="exampleCheck1">{
                                    hideName ? "Login" : "Sign Up"
                                }</label>
                            </div>
                            {
                                hideName === false && <div className="">
                                    <input className="form-control" type="text" placeholder="Enter Your Name" {...register("name", { required: true })} />
                                    {errors.name && <span className="text-danger">This field is required</span>}
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                            }
                            <div className="">
                                <input className="form-control" type="email" placeholder="Enter Your Email"
                                    {...register("email", { pattern: /\S+@\S+\.\S+/, required: true })} />
                                {errors.email?.type === "required" && <span className="text-danger">Email is required</span>}
                                {errors.email?.type === "pattern" && <span className="text-danger">Invalid Email</span>}
                            </div>
                            <div class="">
                                <input className="form-control" type="password" placeholder="Enter Your Password"  {...register("password", {
                                    required: true,
                                    pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/
                                })} />
                                {errors.password?.type === "required" && <span className="text-danger">password is required</span>}
                                {errors.password?.type === "pattern" && <span className="text-danger">Use Strong Password And Minimum 8 Character </span>}
                            </div>

                            <button type="submit" className="btn btn-primary">Login</button>

                        </form>
                        <p className="text-danger text-center mt-1">{errorSuccess.error ? errorSuccess.error : " "}</p>
                        <div style={{}} className="p-5">
                            <button onClick={googleSignIn} className="btn btn-primary w-100 " style={{}}>Google LogIn</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;