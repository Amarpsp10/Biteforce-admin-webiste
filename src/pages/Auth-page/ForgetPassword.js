import React, { useState } from 'react'
import classes from './Auth.module.css'
import theme from '../../theme'
import TextInput from '../../components/input/TextInput'
import {ButtonContained, ButtonSocial} from '../../components/buttons/Button'

const ForgetPassword = () => {
    const[email , setEmail] = useState('')

    return (
        <div className={classes.authPage}>
            <div className={classes.leftSide}>
            </div>
            <div className={classes.RightSide}>
                <div className={classes.formContainer}>
                    <text style={theme.textVariants.header}></text>
                    <text style={theme.textVariants.title}>Forget Password</text>
                    <TextInput 
                        title='Email' 
                        containerStyle={{marginTop:20}} 
                        placeholder='Enter your registered email'
                        value={email}
                        onChange={(text)=>setEmail(text)}
                        type='email'
                    />
                    <text style={{marginBottom:10,fontSize:12,color:theme.colors.darkBlue}} >Password reset link will be send to your registered email address</text>
                    <ButtonContained>Reset Password</ButtonContained>
                    <text style={{color:theme.colors.gray,textAlign:'center',marginTop:20}}>Password remember ? <span style={{color:theme.colors.blue,cursor:'pointer'}}>Log In</span></text>
                </div>
            </div>
        </div>
    )
}

export default ForgetPassword
