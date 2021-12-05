import React,{useContext, useState, useEffect} from 'react'
import { authentication, googleAuthProvider } from '../config'
import { signInWithEmailAndPassword, signInWithPopup, createUserWithEmailAndPassword, sendPasswordResetEmail} from '@firebase/auth'

export const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const[loading,setLoading] = useState(true)
    const [user,setCurrentUser] = useState(null);
    
    function signup(email, password){
        return createUserWithEmailAndPassword(authentication,email,password)
    }
    function login(email, password){
        return signInWithEmailAndPassword(authentication,email,password)
    }
    function loginWithGoogle(){
        return signInWithPopup(authentication, googleAuthProvider)
    }
    function logout(){
        return authentication.signOut()
    }
    function forgetPassword(email){
        return sendPasswordResetEmail(authentication,email)
    }

    useEffect(()=>{
       const unsubscribe = authentication.onAuthStateChanged(user =>{
           setCurrentUser(user)
           setLoading(false)   
       })
       return unsubscribe
    },[])
    
    const value = {
        user,
        setCurrentUser,
        signup,
        login,
        logout,
        loginWithGoogle,
        forgetPassword
    }
    
    return (
       <AuthContext.Provider value={value}>
         {!loading && children}
       </AuthContext.Provider>
    )
}