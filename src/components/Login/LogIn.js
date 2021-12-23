import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hook/useAuth';


const LogIn = () => {
    const { signInWithGoogle } = useAuth();



    return (
        <div>
            <h3>Please LogIn</h3>
            <button onClick={signInWithGoogle}>Google LogIn</button>
            <br />


            <Link to='/register'>New User?</Link>

        </div>
    );
};

export default LogIn;