import React from 'react'
import classes from './Header.module.css'
import theme from '../../theme'
import {IoMdArrowRoundBack} from 'react-icons/io'
import {useHistory} from 'react-router-dom'
const RegisterHeader = ({title}) =>{
    const history = useHistory()

    return(
        <div className={classes.header}>
            <IoMdArrowRoundBack size={30} onClick={()=>history.goBack()}/>
            <text style={theme.textVariants.boldBody}>{title}</text>
            <div>
            </div>
        </div>
    )
}

export default RegisterHeader