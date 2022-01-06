import React, { useContext, useState } from 'react'
import { ClickOutsideListener } from 'react-click-outside-listener'
import classes from './Menu.module.css'
import { FaRegHospital,FaPlus } from 'react-icons/fa'
import { CgDebug } from 'react-icons/cg'
import { MdArrowForwardIos } from 'react-icons/md'
import { HiPlus } from 'react-icons/hi'
import { AiOutlinePlus } from 'react-icons/ai'
import { useHistory } from 'react-router-dom'

const RegisterMenu = () =>{
    const [open, setOpen] = useState(false)
    const history = useHistory()
    const handleClickAway = () => {
        setOpen(false)
	};

    return(
        <div>
        <button className={`${classes.registerButton} ${open? classes.activeReg:null}`} onClick={()=>setOpen(true)}>
            Add New
            <HiPlus className={`${classes.arrow} ${open? classes.activeArrow :null}`} color='rgba(0,0,0,0.6)' size={20}/>
        </button>
        {open?
            <ClickOutsideListener  onClickOutside={handleClickAway}>
                <div className={`${classes.registerMenu} ${open? classes.show : classes.hide}`}>
                    <button onClick={()=>history.push('/register-device')} className={classes.menuButton}>
                        <FaRegHospital style={{marginRight:8}} color='#0B0736' size={18}/>
                        Register Institute
                    </button>
                    <button onClick={()=>history.push('/register-institution')} className={classes.menuButton}>
                        <CgDebug style={{marginRight:8}} color='#0B0736' size={18}/>
                        Register Device
                    </button>
                </div>
            </ClickOutsideListener>
        :null}
        </div>
    )
}

export default RegisterMenu
