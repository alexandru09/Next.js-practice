import { useNavigate, Navigate } from 'react-router-dom';
import { auth, provider } from '../../config/firebase-config';
import { signInWithPopup } from 'firebase/auth';

import "./style.css";
import { useGetUserInfo } from '../../hooks/useGetUserInfo';

export const Auth = () => {
    const navigate = useNavigate();
    const { isAuth } = useGetUserInfo();

    const signInWithGoogle = async () => {
        const results = await signInWithPopup(auth, provider);
        const authInfo = {
            userID: results.user.uid,
            name: results.user.displayName,
            profilePhoto: results.user.photoURL,
            isAuth: true
        };
        // should do this with cookies, not local storage. Research later
        localStorage.setItem("auth", JSON.stringify(authInfo));
        navigate("/expense-tracker");
    };

    if (isAuth) {
        return <Navigate to="/expense-tracker" />
    }

    return (
        <div className='login-page'>
            <p>Sign in with Google to continue.</p>
            <button className='login-with-google-btn' onClick={signInWithGoogle}>
                {" "}
                Sign in with Google
            </button>
        </div>
    );
};