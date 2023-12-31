import React, { useRef, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase.js";
import { Link, useNavigate } from "react-router-dom";
import './SignUp.css';
import Loader from "../components/Loader.js";
function SignUp() {
    const navigate = useNavigate();
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [errMsg, setErrMsg] = useState();
    const [isLoader, setIsLoader] = useState(false);

    function SignUpHandler(e) {
        setIsLoader(true);
        setErrMsg(null);

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
                console.log(errorCode);
                setErrMsg(errorCode);
                setIsLoader(false);

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
                <p className="err_message">{errMsg}</p>
                {isLoader && <Loader className="small_spinner" />}

                <div className="haveAcc">
                    <p>Already have an account?</p>
                    <Link to='/' >Login </Link>

                </div>
            </form>
        </div>
    );
}
export default SignUp;