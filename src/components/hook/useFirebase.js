import { useEffect, useState } from "react"
import initializeAuthentication from "../../Firebase/Firebase.initialize";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";



initializeAuthentication();
const googleProvider = new GoogleAuthProvider();


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();


    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
                console.log(result.user);

            })
            .catch(error => {
                setError(error.message);
            })
    }
    useEffect(() => {                       //this is use for to set user after google sign in
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log("insdie the useEffect", user)
                setUser(user);
            }
        })
    }, []);
    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({});

            })
            .catch(error => {
                setError(error.message);

            });


    }

    return {

        user,
        error,
        signInWithGoogle,
        logout
    }

}
export default useFirebase;
