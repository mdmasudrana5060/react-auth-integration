import React, { createContext } from 'react';
import useFirebase from '../components/hook/useFirebase';


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {      //eivabeo direct distructuring kora jai.eitar mane hoitase props theika children neao as like nicher line.

    // const {children}=props;      props theika children distructure
    const allContext = useFirebase();
    return (
        <AuthContext.Provider value={allContext}>
            {
                children
            }

        </AuthContext.Provider>
    );
};

export default AuthProvider;