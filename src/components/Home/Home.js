import React from 'react';
import useAuth from '../hook/useAuth';

const Home = () => {
    const { user } = useAuth();
    return (
        <div>
            <h2>this is home</h2>
            <h4>Name:{user.displayName}</h4>

        </div>
    );
};

export default Home;