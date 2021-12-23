import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hook/useAuth';

import './Header.css';

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <div className='header'>
            <Link to='/home'>Home</Link>
            <Link to='/register'>Register</Link>
            <Link to='/login'>LogIn</Link>
            <Link to="/shipping">Shipping </Link>
            <span>{user.displayName}</span>
            {
                user.email && <button onClick={logout}>Log Out</button>
            }


        </div>
    );
};

export default Header;