import classes from './Input.module.css'
import theme from '../../theme'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const DateInput = (props) => {
    return(
        <div style={props.containerStyle} className={classes.container}>
            {props.title?<text className={classes.inputTitle} style={theme.textVariants.label}>{props.title}</text>:null} 
            <DatePicker className={classes.dateInput}  selected={props.value}  onChange={(date) => props.onChange(date)} />
        </div>  
    )
}

export default DateInput