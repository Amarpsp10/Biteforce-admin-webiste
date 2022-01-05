import React, { useContext, useEffect, useState } from 'react'
import { isMobile } from 'react-device-detect'
import {RegisterHeader, SelectInput, QrScanner} from '../../components'
import { TextInput, ButtonContained, FormError } from '../../components'
import { getAllInstitutions, registerDevice } from '../../api'
import { AuthContext } from '../../contexts'
import { useHistory } from 'react-router-dom'
import firebase from 'firebase'
export default function InstituteRegister() {
    const { user } = useContext(AuthContext)
    const [institution, setInstitution] = useState('')
    const [insOp, setInsOp] = useState([])
    const [deviceId, setDeviceId] = useState('')
    const [loading, setLoading] = useState(false)
    const [error ,setError] = useState('')
    const history = useHistory()
    useEffect(()=>{
        getInstitutions()
    },[])

    const getInstitutions = async() =>{
        const allIns = await getAllInstitutions()
        const arr = []
        allIns.docs.map((doc)=>{
            arr.push({value:doc.data().name,label:doc.data().name})
        })
        setInsOp(arr)
    }
    const handleRegister = async() =>{
        if(!institution || !deviceId){
            return setError('All fields are required !')
        }
        setLoading(true)
        const register = await registerDevice({device_id: deviceId, institution_name: institution, registered_by: user.uid, last_updated: firebase.firestore.FieldValue.serverTimestamp()})
        if(register===undefined){
            console.log('successfully registered')
            history.push('/home/dashboard')
        }
        setLoading(false)
    }

    return (
        <div>
            <RegisterHeader title='Register Device'/>
            <div style={{display:'flex',flexDirection:'column',paddingInline:isMobile?'5%':'30%'}}>
                <br/>
                <text style={{color:'gray',fontSize:20,marginBottom:10}}>Institutions</text>
                <SelectInput placeholder={'Select Institution'} value={institution} setValue={(selected)=>setInstitution(selected)} options={insOp}/>
                <TextInput value={deviceId} type='text' onChange={(e)=>setDeviceId(e)} title='Device Id' placeholder=''/>
                <QrScanner
                    fps={10}
                    qrbox={250}
                    disableFlip={false}
                    qrCodeSuccessCallback={(decodedText, decodedResult)=>setDeviceId(decodedText)}
                />
                <FormError message={error}/><br/>
                <ButtonContained onClick={()=>handleRegister()} loading={loading}>Register Device</ButtonContained>
            </div>
        </div>
    )
}
