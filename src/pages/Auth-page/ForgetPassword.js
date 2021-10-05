import React, { useState } from 'react'
import classes from './Auth.module.css'
import theme from '../../theme'
import TextInput from '../../components/input/TextInput'
import {ButtonContained, ButtonSocial} from '../../components/buttons/Button'

import GoogleIcon from '../../assets/icons/google-icon.svg'

const Login = () => {
    const[email , setEmail] = useState('')
    const[password, setPassword] = useState('')

    return (
        <div className={classes.authPage}>
            <div className={classes.leftSide}>
            </div>
            <div className={classes.RightSide}>
                <div className={classes.formContainer}>
                    <text style={theme.textVariants.header}>Welcome back to Biteforce Admin</text>
                    <text style={theme.textVariants.title}>Login to your account</text>
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
                    <text style={{color:theme.colors.blue,cursor:'pointer',textAlign:'right',marginBottom:10}}>Forget Password?</text>
                    <ButtonContained>Log In</ButtonContained>
                    <ButtonSocial ><img  src={GoogleIcon} alt='google-icon'/>Log In With Google</ButtonSocial>
                    <text style={{color:theme.colors.gray,textAlign:'center',marginTop:20}}>Dont have an account? <span style={{color:theme.colors.blue,cursor:'pointer'}}>Create Account</span></text>
                </div>
            </div>
        </div>
    )
}

export default Login
