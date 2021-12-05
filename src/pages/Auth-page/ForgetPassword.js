import React, { useState, useContext } from 'react'
import classes from './Auth.module.css'
import theme from '../../theme'
import TextInput from '../../components/input/TextInput'
import {ButtonContained, FormError} from '../../components'
import {useHistory, Redirect} from 'react-router-dom'
import { AuthContext } from '../../contexts'
import valid from '../../utils/FormValidator'

const ForgetPassword = () => {
    const {user, forgetPassword} = useContext(AuthContext)
    const history = useHistory()
    const[email , setEmail] = useState('')
    const [loading, setLoading] = useState(false)    
    const [error, setError] = useState('')

    const handleForgetPassword = async(e) =>{
        e.preventDefault()
        if(!valid.email(email)){
            return setError('Invalid Email Address !')
        }
        setLoading(true)
        try{
            const result = await forgetPassword(email)
            console.log(result)
        }catch(e){
            console.log(e)
            return setError('Email does not have an account!')
        }
        setLoading(false)
    }
    return (
        <div className={classes.authPage}>
            {user? <Redirect to='/home'/> : null}
            <div className={classes.leftSide}>
            </div>
            <div className={classes.RightSide}>
                <div className={classes.formContainer}>
                    <text style={theme.textVariants.header}></text>
                    <text style={theme.textVariants.title}>Forget Password</text>
                    <form onSubmit={(e)=>handleForgetPassword(e)}>
                        <TextInput 
                            title='Email' 
                            containerStyle={{marginTop:20}} 
                            placeholder='Enter your registered email'
                            value={email}
                            onChange={(text)=>setEmail(text)}
                            type='email'
                        />
                        <FormError message={error}/><br/>
                        <text style={{marginBottom:10,fontSize:12,color:theme.colors.darkBlue}} >Password reset link will be send to your registered email address</text><br/><br/>
                        <ButtonContained type='submit' loading={loading}>Reset Password</ButtonContained>
                    </form>
                    <text style={{color:theme.colors.gray,textAlign:'center',marginTop:20}}>Password remember ? <span style={{color:theme.colors.blue,cursor:'pointer'}} onClick={()=>history.push('/login')}>Log In</span></text>
                </div>
            </div>
        </div>
    )
}

export default ForgetPassword
