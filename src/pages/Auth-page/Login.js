import React, { useState, useContext } from 'react'
import classes from './Auth.module.css'
import theme from '../../theme'
import {FormError, ButtonContained, ButtonSocial, TextInput} from './../../components'
import { AuthContext } from '../../contexts'
import valid from '../../utils/FormValidator'
import GoogleIcon from '../../assets/icons/google-icon.svg'
import {useHistory, Redirect} from 'react-router-dom'

const Login = () => {
    const {user, login,loginWithGoogle} = useContext(AuthContext)
    const history = useHistory()
    const[email , setEmail] = useState('')
    const[password, setPassword] = useState('')
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false)
    
    const handleEmailLogin = async(e) =>{
        e.preventDefault()
        setError('')
        if(!valid || !password){
            return setError('Email and Password are required !')
        }
        if(!valid.email(email)){
            return setError('Invalid Email Address !')
        }
        if(!valid.pass(password)){
            return setError('Password must be eight characters long and contain at least one lowercase letter, one uppercase letter, one number and one special character.')
        }
        setLoading(true)
        try{
            const result = await login(email,password)
            if(result?.user){
                history.push('/signup/complete-profile')
            }
        }catch(err){
            setError('Invalid Email and Password')
            return setLoading(false)
        }
        setLoading(false)
    }

    const handleGoogleLogin = async() =>{
        try{
            const result = await loginWithGoogle();
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
                    <text style={theme.textVariants.header}>Welcome back to Biteforce Admin</text>
                    <text style={theme.textVariants.title}>Login to your account</text>
                    <form onSubmit={(e)=>handleEmailLogin(e)}>
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
                        placeholder='Enter password'
                        value={password}
                        onChange={(text)=>setPassword(text)}
                        type='password'
                    />
                    <FormError message={error}/>
                    <text onClick={()=>history.push('/forget-password')} style={{color:theme.colors.blue,cursor:'pointer',textAlign:'right',marginBottom:10}}>Forget Password?</text>
                    <br/><br/>
                    <ButtonContained loading={loading} type='submit'>Log In</ButtonContained>
                    </form>
                    <ButtonSocial onClick={()=>handleGoogleLogin()} ><img  src={GoogleIcon} alt='google-icon'/>Log In With Google</ButtonSocial>
                    <text style={{color:theme.colors.gray,textAlign:'center',marginTop:20}}>Dont have an account? <span style={{color:theme.colors.blue,cursor:'pointer'}} onClick={()=>history.push('/signup')}>Create Account</span></text>
                </div>
            </div>
        </div>
    )
}

export default Login
