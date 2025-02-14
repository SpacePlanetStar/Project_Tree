import React from "react";
import { auth, provider} from '../firbase-config';
import {signInWithPopup} from 'firebase/auth';
import {useNavigate} from 'react-router-dom';
 
function Login({setIsAuth}){
    let navigate = useNavigate();

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth", true);
            setIsAuth(true);
            navigate("/viewposts")
        }); 
    };

    return(
        <div className="loginPage">

            <button className="login-with-google-btn" onClick={signInWithGoogle}>
                Sign in with Google
            </button>
        </div>
    )
}

export default Login;