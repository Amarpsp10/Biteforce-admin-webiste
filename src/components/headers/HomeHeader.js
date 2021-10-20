import React from 'react'
import classes from './Header.module.css'
import theme from '../../theme'
import { isMobile } from 'react-device-detect'
const HomeHeader = () =>{
    return(
        <div className={classes.header}>
            <text style={theme.textVariants.boldBody}>BiteForce</text>
            {!isMobile? <text style={theme.textVariants.body}>Welcome, Amar Preet</text>:null}
            <div style={{backgroundColor:theme.colors.gray}} className={classes.nameIcon}>
                <text style={theme.textVariants.button}>A</text>
            </div>
        </div>
    )
}

export default HomeHeader