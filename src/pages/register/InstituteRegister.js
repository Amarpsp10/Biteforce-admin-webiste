import React, { useContext, useState } from 'react'
import { isMobile } from 'react-device-detect'
import {FormError, RegisterHeader} from '../../components'
import { TextInput, ButtonContained } from '../../components'
import { checkInstitution, registerInstitute } from '../../api'
import { AuthContext } from '../../contexts'
import { useHistory } from 'react-router-dom'

export default function DeviceRegister() {
    const { user } = useContext(AuthContext)
    const [institution, setInstitution] = useState('')
    const [address, setAdress] = useState('')
    const [city, setCity] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const history = useHistory()

    const handleRegister = async() =>{
        setError('')
        setInstitution(institution.trim())
        console.log('running again')
        if(!institution || !address || !city){
            return setError('All fields are required !')
        }
        setLoading(true)
        //check for isntitution exits
        // we can add check for city + name of institution should be uniqe instead of only checking name 
        if(await checkInstitution(institution)){
            setLoading(false)
            return setError('Institution with this name already exist !')
        }
        const register = await registerInstitute({name:institution,address:address,city:city,registered_by:user.uid})
        if(register===undefined){
            console.log('successfully registered')
            history.push('/home/dashboard')
        }
        setLoading(false)
    }
    return (
        <div>
            <RegisterHeader title='Register Institute'/>
            <div style={{display:'flex',flexDirection:'column',paddingInline:isMobile?'5%':'30%'}}>
                <TextInput value={institution} type='text' containerStyle={{marginTop:50}} onChange={(e)=>setInstitution(e)} title='Institution Name' placeholder=''/>
                <TextInput value={address} type='text' onChange={(e)=>setAdress(e)} title='Address of Institution' placeholder=''/>
                <TextInput value={city} type='text' onChange={(e)=>setCity(e)} title='City' placeholder=''/>
                <FormError message={error}/><br/>
                <ButtonContained loading={loading} onClick={()=>handleRegister()}>Register</ButtonContained>
            </div>
        </div>
    )
}
