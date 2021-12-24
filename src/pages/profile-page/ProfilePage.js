import React, { useContext } from 'react'
import {AuthContext} from '../../contexts'
import classes from './Profile.module.css'
import theme from '../../theme'
import {AiOutlineRight} from 'react-icons/ai'

const options = [
    'Account', 'Preference','Settings','Logout'
]
const ProfilePage = () => {
    const {user, userDetail} = useContext(AuthContext)
    return (
        <div className={classes.profile} style={{backgroundColor:'rgba(0,0,0,0.09)'}}>            
            <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',marginTop:20}}>
                <div style={{width:100,height:100,borderRadius:'50%',backgroundColor:theme.colors.green,justifyContent:'center',display:'flex',alignItems:'center',color:'white',fontSize:40}}>
                    {userDetail.name.substring(0,2).toUpperCase()}
                </div>
                <text style={{fontSize:18,color:theme.colors.darkBlue,fontWeight:'bold'}}>{userDetail.name}</text>
                <text style={{fontSize:16,color:theme.colors.darkBlue}}>Signed In as : {userDetail.email}</text>
            </div>
            <br/>
            <div style={{backgroundColor:'white',borderRadius:20,paddingInline:10,paddingBlock:10}}>
                {options.map((data,index)=>{
                    return(
                        <div key={index} style={{flexDirection:'row',cursor:'pointer',justifyContent:'space-between',paddingInline:10,display:'flex',alignItems:'center',paddingBlock:10, borderBottom:options.length-1!==index?'solid 1px rgba(0,0,0,0.2)':'none'}}>
                            <text style={{fontSize:16,color:'rgba(0,0,0,0.9)'}}>{data}</text>
                            <AiOutlineRight size={20} color='gray'/>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}

export default ProfilePage
