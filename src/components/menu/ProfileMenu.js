import React, { useContext } from 'react'
import { ClickOutsideListener } from 'react-click-outside-listener'
import classes from './Menu.module.css'
import {FiUser, FiLogOut} from 'react-icons/fi'
import { AuthContext } from '../../contexts'
import { useHistory } from 'react-router-dom'

const ProfileMenu = ({open, setOpen}) =>{
    const { logout } = useContext(AuthContext)
    const history = useHistory()
    const handleClickAway = () => {
        setOpen(false)
	};

    return(
        <ClickOutsideListener onClickOutside={handleClickAway}>
            <div className={`${classes.profileMenu} ${open? classes.show : classes.hide}`}>
                <button onClick={()=>history.push('/home/profile')} className={classes.menuButton}><FiUser style={{marginRight:8}} color='#0B0736' size={18}/> Profile</button>
                <button onClick={()=>logout()} className={classes.menuButton}><FiLogOut style={{marginRight:8}} color='#0B0736' size={18}/>Log Out</button>
            </div>
        </ClickOutsideListener>
    )
}

export default ProfileMenu
