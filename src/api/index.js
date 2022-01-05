import { db } from "../config"
import { Script_Url } from '../config'

export const getStaff = async (uid) =>{
    const staff = await db.collection('staff').doc(uid).get()
    if(staff.exists){
        return staff.data()
    }
    return null
}

export const saveProfile = async(uid,profile) =>{
    const result = await db.collection('staff').doc(uid).set(profile)
    return result
}

export const checkInstitution = async(institution) =>{
    const result = await db.collection('institutions').doc(institution).get()
    return result.exists()
}

export const registerInstitute = async(institute)=>{
    const result = await db.collection('institutions').doc(institute.name).set(institute)
    return result
}

export const createSpreadSheet = async(institute_name)=>{
    var formData = new FormData()
    formData.append('action','createSpreadSheet')
    formData.append('institute_name',institute_name)
    const result = await fetch(`${Script_Url}`,{
        method:'POST',
        body:formData
    }).then(response=>{
        return response
    }).catch((e)=>{
        return e.response
    })
    const string = await result.text()
    const data = JSON.parse(string)
    return data
}

export const registerDevice = async(device) =>{
    const result = await db.collection('devices').doc(device.device_id).set(device)
    return result
}

export const getAllInstitutions = async() =>{
    const result = await db.collection('institutions').limit(10).get()
    return result
}

export const allCities = async() =>{
    const result = await db.collection('data').doc('cities').get()
    return result.data()
}

export const allRegisteredInstitute = async(user) =>{
    const result = await db.collection('institutions').where('registered_by','==',user).get()
    return result
}