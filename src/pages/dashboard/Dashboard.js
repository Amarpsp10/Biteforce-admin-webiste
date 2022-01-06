import React, { useContext, useEffect, useState } from 'react'
import { ButtonOutlined, RegisterMenu, ButtonContained, UpdateMenu } from '../../components'
import theme from '../../theme'
import classes from './Dashboard.module.css'
import {useHistory} from 'react-router-dom'
import { AuthContext } from '../../contexts'
import { allRegisteredInstitute } from '../../api'
export default function Dashboard() {
    const { user } = useContext(AuthContext)
    const history = useHistory()
    const [activities, setActivities] = useState([])
    useEffect(()=>{
        getActivities()
    },[])

    const getActivities = async() =>{
        const allRegisteredIns = await allRegisteredInstitute(user.uid)
        const docs =  allRegisteredIns.docs.map((data) => { return {id:data.id,data:data.data()}})
        console.log(docs)
        if(docs.length){
            setActivities(docs)
        }
    }
    return (
        <div className={classes.Dashboard}>
            <div className={classes.buttons}>
                <UpdateMenu/>
                <RegisterMenu/>
            </div>
            <div style={theme.boxVariants.primary}>
                <div className={classes.boxHeader}>
                    <text style={theme.textVariants.body}>Recent Activity</text>
                </div>
                <hr/>
               {activities.length?
                    <>{activities.map((data,index)=>{
                        return(
                            <>
                            <div className={classes.dashboardItems}>
                                <div style={{display:'flex',flexDirection:'column'}}>
                                <text>
                                    <span style={{color:theme.colors.darkBlue,fontWeight:'bold'}}>{data.data.name} </span>
                                     Successfully registered by you
                                </text>
                                <text>{data.data.city}</text>
                                </div>
                                <text>{new Date(data.data.created_at.toDate()).toLocaleDateString()}</text>
                            </div>
                            <hr/>
                            </>
                        )
                    })}
                    </>
                :
                <div style={{textAlign:'center'}}>
                    <text>No Activity</text>
                </div>
                }
            </div>
        </div>
    )
}
