import theme from '../../theme'
import classes from './Error.module.css'
import FeedIcon from './../../assets/icons/feed-icon.svg'

const FormError = ({message}) =>{
    return(
        <>
        {message ?
            <div className={classes.formErrorContainer}>
                <img src={FeedIcon} alt='error-icon'/>
                <text style={{color:'black',fontSize:13}}>{message}</text>
            </div>
            :null
            }
        </>
    )
}

export default FormError;