import React, { useState, useContext } from 'react'
import classes from './Auth.module.css'
import theme from '../../theme'
// import valid from '../../utils/FormValidator'
import { useHistory } from 'react-router-dom'
import { ButtonContained, TextInput, DateInput, FormError } from './../../components'
import { AuthContext } from '../../contexts'
import {Redirect} from 'react-router-dom'
import { saveProfile } from '../../api'
const SignUpInfo = () => {
    const {user, userDetail, setUserDetail} = useContext(AuthContext)
    const[name , setName] = useState('')
    const[phone, setPhone] = useState('')
    const [startDate, setStartDate] = useState(new Date());
    const [loading, setLoading] = useState(false)
    const [error ,setError] = useState('')
    const history = useHistory()

    const handleSave = async(e) =>{
        e.preventDefault()
        setError('')
        if(name.trim()===''){
            return setError('Name is required !')
        }
        if(phone.length===10){
            return setError('Phone number should be 10 digit number !')
        }
        setLoading(true)
        const profile =  {name:name, phone: phone, dob: startDate, id: user.uid, email: user.email}
        const save = await saveProfile(user.uid, profile)
        if(save===undefined){
            setUserDetail(profile)
            history.push('/home')
        }
        setLoading(false)
    }
    return (
        <div className={classes.authPage}>
            {user? userDetail? <Redirect to='/home'/> : null : <Redirect to='/'/>}
            <div className={classes.leftSide}>
            </div>
            <div className={classes.RightSide}>
                <div className={classes.formContainer}>
                    <text style={theme.textVariants.header}>Almost Done to Create Account</text>
                    <text style={theme.textVariants.title}>Complete Profile</text>
                    <form onSubmit={(e)=>handleSave(e)}>
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
                    <FormError message={error}/><br/>
                    <ButtonContained loading={loading} type='submit'>Save Profile</ButtonContained>
                    </form>
                    <text style={{color:theme.colors.gray,textAlign:'center',marginTop:20}}>Change Account? <span style={{color:theme.colors.blue,cursor:'pointer'}}>Log Out</span></text>
                </div>
            </div>
        </div>
    )
}

export default SignUpInfo
