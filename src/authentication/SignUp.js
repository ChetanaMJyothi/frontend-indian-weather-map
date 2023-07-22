import React, { useState, useRef } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase.js";
import { Link, useNavigate } from "react-router-dom";
import './SignUp.css';

function SignUp() {
    const navigate = useNavigate();
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    function SignUpHandler(e) {
        navigate('/loader');

        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
        const emailVal = emailRef.current.value;
        const passwordVal = passwordRef.current.value;
        e.preventDefault();
        createUserWithEmailAndPassword(auth, emailVal, passwordVal)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                navigate('/map');

            }
            )
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);

            });
    }

    return (
        <div className='login_sec'>
            <h1>Welcome to Indian Weather View Map! </h1>
            <form onSubmit={SignUpHandler}>
                <input className="input" ref={nameRef} type="text" placeholder="enter your name" />
                <input className="input" ref={emailRef} type="text" placeholder="enter email" />
                <input className="input" ref={passwordRef} type="password" placeholder="enter password" />
                <small className="makered">Password Length should be 6 or more characters</small>
                <br></br>
                <button className="button">Sign Up</button>
                <div className="haveAcc">
                    <p>Already have an account?</p>
                    <Link to='/' >Login </Link>

                </div>
            </form>
        </div>
    );
}
export default SignUp;