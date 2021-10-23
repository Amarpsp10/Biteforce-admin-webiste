import classes from './Input.module.css'
import theme from '../../theme'

const TextInput = ({containerStyle, title, value, type, onChange, placeholder}) => {
    return(
        <div style={containerStyle} className={classes.container}>
            {title?<text className={classes.inputTitle} style={theme.textVariants.label}>{title}</text>:null} 
            <input value={value} type={type} onChange={(e)=>onChange(e.target.value)} style={theme.textVariants.input} color='black' placeholder={placeholder} className={classes.input}/>
        </div>  
    )
}

export default TextInput