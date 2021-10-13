import React, { useState } from 'react'
import classes from './Auth.module.css'
import theme from '../../theme'
import TextInput from '../../components/input/TextInput'
import {ButtonContained, ButtonSocial} from '../../components/buttons/Button'
import FormError from '../../components/Errors/FormError'
import GoogleIcon from '../../assets/icons/google-icon.svg'
import {useHistory} from 'react-router-dom'

const Login = () => {
    const history = useHistory()
    const[email , setEmail] = useState('')
    const[password, setPassword] = useState('')
    const [error, setError] = useState('');

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
                    <FormError message={error}/>
                    <text onClick={()=>history.push('/forget-password')} style={{color:theme.colors.blue,cursor:'pointer',textAlign:'right',marginBottom:10}}>Forget Password?</text>
                    <ButtonContained>Log In</ButtonContained>
                    <ButtonSocial ><img  src={GoogleIcon} alt='google-icon'/>Log In With Google</ButtonSocial>
                    <text style={{color:theme.colors.gray,textAlign:'center',marginTop:20}}>Dont have an account? <span style={{color:theme.colors.blue,cursor:'pointer'}} onClick={()=>history.push('/signup')}>Create Account</span></text>
                </div>
            </div>
        </div>
    )
}

export default Login
