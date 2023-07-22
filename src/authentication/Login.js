import React, { useState } from 'react'
import { useRef } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase.js";
import { Link, useNavigate } from "react-router-dom";
import './Login.css'
function Login() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [errMsg, setErrMsg] = useState(null);
    const navigate = useNavigate();

    function submitHandler(e) {
        e.preventDefault();
        const emailVal = emailRef.current.value;
        const passwordVal = passwordRef.current.value;
        navigate('/loader');
        signInWithEmailAndPassword(auth, emailVal, passwordVal)
            .then((userCredential) => {
                console.log(userCredential);
                const user = userCredential.user;
                console.log(user.email);
                console.log(user.userName);
                navigate('/map');

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
                setErrMsg(errorMessage);
            });

    }
    return (
        <div className='login_sec'>
            <h1>Welcome to Indian Weather View Map! </h1>
            <form onSubmit={submitHandler}>
                <input className="input" ref={emailRef} type="text" placeholder="enter email" />
                <input className="input" ref={passwordRef} type="password" placeholder="enter password" />
                {errMsg && <p className="errorMsg">{errMsg}</p>}
                <button className="button">Login</button>
            </form>
            <div className="haveAcc">
                <p>New User? click on </p>
                <Link to='/signup'>Sign Up  </Link>

            </div>
        </div>
    )
}

export default Login
