import React, { useState } from 'react'
import { isMobile } from 'react-device-detect'
import {RegisterHeader} from '../../components'
import { TextInput, ButtonContained } from '../../components'
export default function DeviceRegister() {
    const [institution, setInstitution] = useState('')
    const [address, setAdress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    
    return (
        <div>
            <RegisterHeader title='Register Device'/>
            <div style={{display:'flex',flexDirection:'column',paddingInline:isMobile?'5%':'30%'}}>
                <TextInput value={institution} type='text' containerStyle={{marginTop:50}} onChange={(e)=>setInstitution(e)} title='Institution Name' placeholder=''/>
                <TextInput value={address} type='text' onChange={(e)=>setAdress(e)} title='Address of Institution' placeholder=''/>
                <TextInput value={city} type='text' onChange={(e)=>setCity(e)} title='City' placeholder=''/>
                <TextInput value={state} type='text' containerStyle={{marginBottom:30}} onChange={(e)=>setState(e)} title='State' placeholder=''/>
                <ButtonContained >Register Institution</ButtonContained>
            </div>
        </div>
    )
}
