import React, { useState } from 'react'
import classes from './Auth.module.css'
import theme from '../../theme'
import TextInput from '../../components/input/TextInput'
import {ButtonContained, ButtonSocial} from '../../components/buttons/Button'
import {useHistory} from 'react-router-dom'

import GoogleIcon from '../../assets/icons/google-icon.svg'

const SignUp = () => {
    const history = useHistory()
    const[email , setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[cpassword, setCpassword] = useState('')

    return (
        <div className={classes.authPage}>
            <div className={classes.leftSide}>
            </div>
            <div className={classes.RightSide}>
                <div className={classes.formContainer}>
                    <text style={theme.textVariants.header}>Welcome to Biteforce Admin</text>
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
                    <ButtonContained>Sign Up</ButtonContained>
                    <ButtonSocial ><img  src={GoogleIcon} alt='google-icon'/>Sign Up With Google</ButtonSocial>
                    <text style={{color:theme.colors.gray,textAlign:'center',marginTop:20}}>Already have an account? <span style={{color:theme.colors.blue,cursor:'pointer'}} onClick={()=>history.push('/login')}>Login</span></text>
                </div>
            </div>
        </div>
    )
}

export default SignUp
