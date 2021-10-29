import React,{useContext, useState, useEffect} from 'react'
import {authentication, googleAuthProvider} from '../config'
const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const[loading,setLoading] = useState(true)
    const [currentUser,setCurrentUser] = useState();
    
    function signup(email, password){
        return authentication.createUserWithEmailAndPassword(email,password)
    }
    function login(email, password){
        return authentication.signInWithEmailAndPassword(email,password)
    }
    function loginWithGoogle(){
        return authentication.signInWithPopup(googleAuthProvider)
    }
    function logout(){
        return authentication.signOut()
    }
    useEffect(()=>{
       const unsubscribe = authentication.onAuthStateChanged(user =>{
           setCurrentUser(user)
           setLoading(false)   
       })
       return unsubscribe
    },[])
    
    const value = {
        currentUser,
        signup,
        login,
        logout,
        loginWithGoogle
    }
    
    return (
       <AuthContext.Provider value={value}>
         {!loading && children}
       </AuthContext.Provider>
    )
}