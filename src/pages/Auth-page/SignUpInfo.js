import React, { useState } from 'react'
import classes from './Auth.module.css'
import theme from '../../theme'
import {FormError, ButtonContained, TextInput, DateInput, RadioInput} from './../../components'

const SignUpInfo = () => {
    const[name , setName] = useState('')
    const[phone, setPhone] = useState('')
    const [startDate, setStartDate] = useState(new Date());
    const[gender, setGender] = useState();

    return (
        <div className={classes.authPage}>
            <div className={classes.leftSide}>
            </div>
            <div className={classes.RightSide}>
                <div className={classes.formContainer}>
                    <text style={theme.textVariants.header}>Almost Done to Create Account</text>
                    <text style={theme.textVariants.title}>Complete Profile</text>
                    <TextInput 
                        title='Full Name' 
                        containerStyle={{marginTop:theme.spacing.l}} 
                        placeholder='enter your name'
                        value={name}
                        onChange={(text)=>setName(text)}
                        type='name'
                    />
                    <TextInput 
                        title='Phone Number' 
                        placeholder='10 digit phone number'
                        value={phone}
                        onChange={(text)=>setPhone(text)}
                        type='phone'
                    />
                    <DateInput
                        title='Date Of Birth' 
                        value={startDate}
                        onChange={(date)=>setStartDate(date)}
                    />
                    <RadioInput containerStyle={{marginBottom:theme.spacing.xl}}  title='Gender' values={['Male','Female','Other']}/>
                   
                    <ButtonContained>Save Profile</ButtonContained>
                    <text style={{color:theme.colors.gray,textAlign:'center',marginTop:20}}>Change Account? <span style={{color:theme.colors.blue,cursor:'pointer'}}>Log Out</span></text>
                </div>
            </div>
        </div>
    )
}

export default SignUpInfo
