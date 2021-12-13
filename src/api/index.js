import { db } from "../config"
import { collection, doc, getDoc, getDocs, setDoc, serverTimestamp, addDoc } from 'firebase/firestore'

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
    await addDoc(doc(db, `staff/${institute.registered_by}/activity`),{registered:'institute',timestamp:serverTimestamp(), institution_name: institute.name})
    return result
}

export const registerDevice = async(device) =>{
    const result = await setDoc(doc(db,'devices', device.device_id), device)
    await addDoc(doc(db, `staff/${device.registered_by}/activity`),{registered:'device',timestamp:serverTimestamp(), device_id: device.device_id})
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