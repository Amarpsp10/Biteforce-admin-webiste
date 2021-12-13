import React, { useEffect, useContext, createContext} from 'react'
import { AuthContext } from '.'
export const ActivityContext = createContext()

export function useActivity(){
    return useContext(ActivityContext)
}

export const ActivityProvider = ({children}) =>{
    const { user } = useContext(AuthContext)
    const value = {
        user
    }

    return(
        <ActivityContext.Provider value={value}>
            {children}
        </ActivityContext.Provider>
    )

}