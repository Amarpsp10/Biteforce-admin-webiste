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