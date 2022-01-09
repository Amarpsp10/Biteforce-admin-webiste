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
                <div style={{borderBottom:'solid 2px rgba(0,0,0,0.1)',paddingBottom:15}} className={classes.boxHeader}>
                    <text className={classes.dashName}>Recent Activity</text>
                </div>
               {activities.length?
                    <>{activities.map((data,index)=>{
                        return(
                            <>
                            <div className={classes.dashboardItems}>
                                <div style={{display:'flex',flexDirection:'column'}}>
                                <text style={{fontSize:14}}>
                                    <span className={classes.dashName}>{data.data.name} </span>
                                    Registered by you
                                </text>
                                <text style={{fontSize:13}}>{data.data.city}</text>
                                </div>
                                <text style={{fontSize:11,fontWeight:'500',color:'rgba(0,0,0,0.7)'}}>{new Date(data.data.created_at.toDate()).toDateString()}</text>
                            </div>
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
