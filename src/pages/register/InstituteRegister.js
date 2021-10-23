import React, { useState } from 'react'
import { isMobile } from 'react-device-detect'
import {RegisterHeader} from '../../components'
import { TextInput, ButtonContained } from '../../components'
export default function InstituteRegister() {
    const [institution, setInstitution] = useState('')
    const [deviceId, setDeviceId] = useState('')
    const [devicePassword, setDevicePassword] = useState('')
    
    return (
        <div>
            <RegisterHeader title='Register Device'/>
            <div style={{display:'flex',flexDirection:'column',paddingInline:isMobile?'5%':'30%'}}>
                <TextInput value={institution} type='text' containerStyle={{marginTop:50}} onChange={(e)=>setInstitution(e)} title='Institution Name' placeholder=''/>
                <TextInput value={deviceId} type='text' onChange={(e)=>setDeviceId(e)} title='Device Id' placeholder=''/>
                <TextInput value={devicePassword} type='text' containerStyle={{marginBottom:30}} onChange={(e)=>setDevicePassword(e)} title='Device Password' placeholder=''/>
                <ButtonContained >Register Device</ButtonContained>
            </div>
        </div>
    )
}
