import classes from './Input.module.css'
import theme from '../../theme'

const TextInput = (props) => {
    return(
        <div style={props.containerStyle} className={classes.container}>
            {props.title?<text className={classes.inputTitle} style={theme.textVariants.label}>{props.title}</text>:null} 
            <input value={props.value} type={props.type} onChange={(e)=>props.onChange(e.target.value)} style={theme.textVariants.input} color='black' placeholder={props.placeholder} className={classes.input}/>
        </div>  
    )
}

export default TextInput