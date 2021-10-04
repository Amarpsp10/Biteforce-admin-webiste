import classes from './Button.module.css'
import { isMobile } from "react-device-detect";
import theme from '../../theme'
const ButtonOutlined = (props) => {
    return <button
                style={theme.buttonVariants.outline}
                className={`${classes.button} ${classes.outlinedButton}`} 
                type={props.type ? props.type : 'button'} 
                onClick={!isMobile ? props.onClick : null} 
                onTouchStart={isMobile ? props.onClick : null}
                disabled={props.disabled}>
                    {props.children}
            </button>
}

const ButtonContained = (props) =>{
    return <button
                style={theme.buttonVariants.contained}
                className={`${classes.button} ${classes.containedButton}`} 
                type={props.type ? props.type : 'button'} 
                onClick={!isMobile ? props.onClick : null} 
                onTouchStart={isMobile ? props.onClick : null}
                disabled={props.disabled}>
                    {props.children}
            </button>
}

export { ButtonOutlined, ButtonContained}
