import React, { useContext, useState, useEffect } from 'react'
import { isMobile } from 'react-device-detect'
import {FormError, RegisterHeader} from '../../components'
import { TextInput, ButtonContained, SelectInput } from '../../components'
import { checkInstitution, registerInstitute, allCities } from '../../api'
import { AuthContext } from '../../contexts'
import { useHistory } from 'react-router-dom'

export default function DeviceRegister() {
    const { user } = useContext(AuthContext)
    const [institution, setInstitution] = useState('')
    const [address, setAdress] = useState('')
    const [city, setCity] = useState('')
    const [cityOp, setCityOp] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const history = useHistory()

    useEffect(()=>{
        GetCities()
    },[])

    const GetCities = async() =>{
        const allCity = await allCities()
        const arr = []
        allCity.result.map((data)=>{
            arr.push({value:data.ascii_name,label:data.ascii_name})
        })
        setCityOp(arr)
    }

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
                <text style={{color:'gray',fontSize:20,marginBottom:10}}>City</text>
                <SelectInput value={city} setValue={(selected)=>setCity(selected)} options={cityOp} placeholder={'Select City'}/><br/>
                <FormError message={error}/><br/>
                <ButtonContained loading={loading} onClick={()=>handleRegister()}>Register</ButtonContained>
            </div>
        </div>
    )
}
