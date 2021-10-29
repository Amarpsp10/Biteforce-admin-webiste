import React, { useState } from 'react'
import classes from './Auth.module.css'
import theme from '../../theme'
import {ButtonContained} from './../../components'
import {useHistory} from 'react-router-dom'

const Message = () => {
    const history = useHistory()

    return (
        <div className={classes.authPage}>
            <div className={classes.leftSide}>
            </div>
            <div className={classes.RightSide}>
                <div className={classes.formContainer}>
                    <text style={theme.textVariants.header}>Message page here</text>
                    <text style={theme.textVariants.title}>Login to your account</text>
                    
                    <text onClick={()=>history.push('/forget-password')} style={{color:theme.colors.blue,cursor:'pointer',textAlign:'right',marginBottom:10}}>Forget Password?</text>
                    <ButtonContained>Log In</ButtonContained>
                    <text style={{color:theme.colors.gray,textAlign:'center',marginTop:20}}>Dont have an account? <span style={{color:theme.colors.blue,cursor:'pointer'}} onClick={()=>history.push('/signup')}>Create Account</span></text>
                </div>
            </div>
        </div>
    )
}

export default Message
