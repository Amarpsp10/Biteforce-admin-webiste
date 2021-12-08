import React, { useState, useContext} from 'react'
import classes from './Auth.module.css'
import theme from '../../theme'
import {FormError, ButtonContained, ButtonSocial, TextInput} from './../../components'
import { AuthContext } from '../../contexts'
import {useHistory, Redirect} from 'react-router-dom'
import valid from '../../utils/FormValidator'
import GoogleIcon from '../../assets/icons/google-icon.svg'

const SignUp = () => {
    const {user, signup, loginWithGoogle} = useContext(AuthContext)
    const history = useHistory()
    const[email , setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[cpassword, setCpassword] = useState('')
    const[loading, setLoading] = useState(false)
    const[error, setError] = useState('')

    const handleSignup = async(e) =>{
        e.preventDefault()
        setError('')
        if(!valid.email(email))
            return setError('Invalid Email Address !')
        if(!valid.pass(password))
            return setError('Password must be eight characters long and contain at least one lowercase letter, one uppercase letter, one number and one special character.')
        if(password!==cpassword)
            return setError('Passwords do not match !')
        setLoading(true)
        try{
            const result = await signup(email, password)
            if(result?.user){
                history.push('/signup/complete-profile')
            }
        }catch(e){
            setError('Email already exist!')
            return setLoading(false)
        }
        setLoading(false)
    }

    const handleGoogleLogin = async() =>{
        try{
            const result = await loginWithGoogle()
            if(result?.user){
                history.push('/signup/complete-profile')
            }
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div className={classes.authPage}>
            {user? <Redirect to='/home'/> : null}
            <div className={classes.leftSide}>
            </div>
            <div className={classes.RightSide}>
                <div className={classes.formContainer}>
                    <form onSubmit={(e)=>handleSignup(e)}>
                        <text style={theme.textVariants.header}>Welcome to Biteforce Admin</text><br/>
                        <text style={theme.textVariants.title}>Register</text>
                        <TextInput 
                            title='Email' 
                            containerStyle={{marginTop:20}} 
                            placeholder='your email'
                            value={email}
                            onChange={(text)=>setEmail(text)}
                            type='email'
                        />
                        <TextInput 
                            title='Password' 
                            placeholder='create password'
                            value={password}
                            onChange={(text)=>setPassword(text)}
                            type='password'
                        />
                        <TextInput 
                            title='Password' 
                            containerStyle={{marginBottom:20}} 
                            placeholder='confirm your password'
                            value={cpassword}
                            onChange={(text)=>setCpassword(text)}
                            type='password'
                        />
                        <FormError message={error}/><br/>
                        <ButtonContained loading={loading} type='submit'>Sign Up</ButtonContained>
                    </form>
                    <ButtonSocial onClick={()=>handleGoogleLogin()} ><img  src={GoogleIcon} alt='google-icon'/>Sign Up With Google</ButtonSocial>
                    <text style={{color:theme.colors.gray,textAlign:'center',marginTop:20}}>Already have an account? <span style={{color:theme.colors.blue,cursor:'pointer'}} onClick={()=>history.push('/login')}>Login</span></text>
                </div>
            </div>
        </div>
    )
}

export default SignUp
