import classes from './Button.module.css'
import { isMobile } from "react-device-detect";
import theme from '../../theme'
import Loader from '../loader/Loader'
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

const ButtonContained = ({type, onClick, disabled, loading, children}) =>{
    return <button
                style={theme.buttonVariants.contained}
                className={`${classes.button} ${classes.containedButton}`} 
                type={type ? type : 'button'} 
                onClick={!type? !isMobile ? onClick : null : null} 
                onTouchStart={!type? isMobile ? onClick : null : null}
                disabled={disabled}>
                     {loading?
                 <Loader/>:
                 <>
                 {children}
                 </>}
            </button>
}

const ButtonSocial = (props) =>{
    return <button
                style={theme.buttonVariants.socialContained}
                className={`${classes.button} ${classes.socialButton}`} 
                type={props.type ? props.type : 'button'} 
                onClick={!isMobile ? props.onClick : null} 
                onTouchStart={isMobile ? props.onClick : null}
                disabled={props.disabled}>
                    {props.children}
            </button>
}


export { ButtonOutlined, ButtonContained, ButtonSocial}
