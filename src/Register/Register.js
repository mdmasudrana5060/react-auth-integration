import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h2>Please Register</h2>
            <form >
                <input type="email" />
                <br />
                <input type="password" />
                <br />
                <button type="submit" value="submit">Submit</button>
            </form>
            <Link to="/login">Already Registerd?</Link>

        </div>
    );
};

export default Register;