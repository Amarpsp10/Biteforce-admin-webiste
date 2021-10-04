import React from 'react'
import classes from './Landing.module.css'
import theme from '../../theme'
import {ButtonOutlined, ButtonContained} from '../../components/buttons/Button'

import BgImage from '../../assets/svgs/bg-image-landing.svg'
import ForDotIcon from '../../assets/icons/four-dot.svg'

const Landing = () => {
    return (
        <div className={classes.landingpage}>
            <div className={classes.bgImage}>
                <img src={BgImage} alt='bg-image'/>
            </div>
            <div className={classes.header}>
                <text style={theme.textVariants.boldBody}>BiteForce</text>
                <ButtonOutlined><img width='13px' style={{marginRight:5}} src={ForDotIcon} alt='four-dot-icon'/>Our App</ButtonOutlined>
            </div>
            <section className={classes.introSection}>
                <text style={theme.textVariants.title}>Welcome to Bite Force Admin</text>
                <text className={classes.middleSpacing} style={theme.textVariants.header}>Register  your account to get access of biteforce Admin</text>
                <ButtonContained>Get Started</ButtonContained>
            </section>
        </div>
    )
}

export default Landing