import { db } from "../config"
import { doc, getDoc, setDoc } from 'firebase/firestore'

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
    return result
}