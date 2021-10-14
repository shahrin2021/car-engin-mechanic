import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged   } from "firebase/auth";
import firebaseInitializeAuthentication from "../Pages/Login/Firebase/Firebase.init";
firebaseInitializeAuthentication()
const useFirebase= ()=>{
    const [user, setUser]=useState({});
    const [isLoading , setIsLoading]=useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle=()=>{
        signInWithPopup(auth , googleProvider)
        .then(result=>{
            setUser(result.user)
        })
        .finally(()=>setIsLoading(false))
    };

    useEffect(()=>{
        const unsubscribed= onAuthStateChanged(auth , user=>{
                  if(user){
                      setUser(user)
                  }else{
                      setUser({})
                  }
                  setIsLoading(false);
              })
      
              return ()=>unsubscribed;
      
          
          },[]);

    const logOut = ()=>{
        signOut(auth)
        .then(()=>{}).finally(()=>setIsLoading(false))
    }

  
    return {user ,isLoading, signInWithGoogle, logOut}
};

export default useFirebase;