import classes from './Input.module.css'
import theme from '../../theme'


const RadioInput = (props) =>{
    return(
        <div style={props.containerStyle} className={classes.container}>
        {props.title?<text className={classes.inputTitle} style={theme.textVariants.label}>{props.title}</text>:null} 
        <form style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}>
           { props.values.map(data=>{
               return <><input id={data} type="radio" style={{height:18,width:18}} name="fruit" value={data} /><label htmlFor={data}><text style={theme.textVariants.label}>{data}</text></label></>
            })
        }
        </form>
        </div>
    )
}

export default RadioInput