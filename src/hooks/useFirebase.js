import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import { 
        getAuth, 
        signInWithPopup, 
        GoogleAuthProvider, 
        onAuthStateChanged,
        signOut, 
        GithubAuthProvider
    } from "firebase/auth";


initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();
    const signInUsingGoogle = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            console.log(result.user);
            setUser(result.user);
        })
        .catch(error =>{
            setError(error);
        })
    }
    const signInUsingGithub = () =>{
        signInWithPopup(auth, gitHubProvider)
        .then(result=>{
            setUser(result.user);
            console.log(result.user);
        })
        .catch(error=>{
            setError(error);
        })
    }
    const logout =()=>{
        signOut(auth)
        .then(()=>{
            setUser({});
        })
    }

    useEffect(()=>{
        onAuthStateChanged(auth, user =>{
            if(user){
                setUser(user);
            }
        })
    },[])
    return {
        user,
        error,
        logout,
        signInUsingGoogle,
        signInUsingGithub
    }
}

export default useFirebase;