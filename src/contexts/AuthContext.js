import React,{useContext, useState, useEffect} from 'react'
import { authentication, googleAuthProvider } from '../config'
// import { signInWithEmailAndPassword, signInWithPopup, createUserWithEmailAndPassword, sendPasswordResetEmail} from '@firebase/auth'

import { getStaff } from '../api'
export const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const[loading,setLoading] = useState(true)
    const [user,setCurrentUser] = useState(null);
    const [userDetail, setUserDetail] = useState(false)

    function signup(email, password){
        // return createUserWithEmailAndPassword(authentication,email,password)
        return authentication.createUserWithEmailAndPassword(email,password)
    }
    function login(email, password){
        // return signInWithEmailAndPassword(authentication,email,password)
        return authentication.signInWithEmailAndPassword(email,password)
    }
    function loginWithGoogle(){
        // return signInWithPopup(authentication, googleAuthProvider)
        return authentication.signInWithPopup(googleAuthProvider)
    }
    function logout(){
        // return authentication.signOut()
        return authentication.signOut()
    }
    function forgetPassword(email){
        // return sendPasswordResetEmail(authentication,email)
        return authentication.sendPasswordResetEmail(email)
    }

    useEffect(()=>{
       const unsubscribe = authentication.onAuthStateChanged(user =>{
           if(user){
               setCurrentUser(user)
               GetStaff(user.uid)
            }
            else{
                setUserDetail(null)
                setCurrentUser(null)
            }
           setLoading(false)   
       })
       return unsubscribe
    },[])

    const GetStaff = async(uid) =>{
        const staff = await getStaff(uid)
        return setUserDetail(staff)
    }
    
    const value = {
        user,
        userDetail,
        setCurrentUser,
        setUserDetail,
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