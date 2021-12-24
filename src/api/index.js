import { db } from "../config"
import { collection, doc, getDoc, getDocs, setDoc, serverTimestamp, addDoc, where, query } from 'firebase/firestore'
import { Script_Url } from '../config'

export const getStaff = async (uid) =>{
    const staff = await getDoc(doc(db,'staff',uid))
    if(staff.exists){
        return staff.data()
    }
    return null
}

export const saveProfile = async(uid,profile) =>{
    const result = await setDoc(doc(db,'staff',uid),profile)
    return result
}

export const checkInstitution = async(institution) =>{
    const result = await getDoc(doc(db,'institutions',institution))
    return result.exists()
}

export const registerInstitute = async(institute)=>{
    const result = await setDoc(doc(db,'institutions',institute.name),institute)
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
    const result = await setDoc(doc(db,'devices', device.device_id), device)
    return result
}

export const getAllInstitutions = async() =>{
    const result = await getDocs(collection(db,'institutions'))
    return result
}

export const allCities = async() =>{
    const result = await getDoc(doc(db,'data','cities'))
    return result.data()
}

export const allRegisteredInstitute = async(user) =>{
    // const docsRef = collection(db,'institutions')
    // const queryRef = query(docsRef, where('registered_by','==',user))
    // const result = await getDocs(queryRef)
    const result = await getDocs(collection(db,'institutions'))
    return result
}