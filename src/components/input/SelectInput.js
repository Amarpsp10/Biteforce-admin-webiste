import React from 'react'
// imp  ort theme from '../../theme'
import Select from 'react-select';
import classes from './Input.module.css'

// const customStyle = {
//     option:(provided,state)=>({
//         ...provided,
//         backgroundColor:state.isSelected? theme.colors.footer: theme.colors.footer,
//         color: theme.colors.whiteoff,
//         ":active":{
//             backgroundColor:theme.colors.dark
//         },
//         ":hover":{
//             backgroundColor:theme.colors.lightDark
//         }
//     }),
//     menu: (provided, state) => ({
//         ...provided,
//        backgroundColor:theme.colors.footer,
//       }),
//     indicatorsContainer: (provided, state) => ({
//     ...provided,
//     backgroundColor:theme.colors.footer
//     }),
//     control: (provided, state) => ({
//         ...provided,
//         backgroundColor:theme.colors.lightDark,
//         color: theme.colors.white,
//         borderColor:theme.colors.gray,
//     }),
//     singleValue:(provided,state)=>({
//         ...provided,
//         color: theme.colors.gray
//     }),
// }

// const customTheme = (theme) => ({
//     ...theme,
//     colors: {
//     ...theme.colors, 
//       primary: theme.colors.footer,
//     },
// })

const SelectInput = ({value, setValue, options, maxMenuHeight,placeholder}) =>{
    return(
        <Select
            value={value}
            onChange={(selectedOption)=>setValue(selectedOption)}
            options={options}
            // styles={customStyle}
            // theme={customTheme}
            placeholder={placeholder}
            maxMenuHeight={maxMenuHeight}
            className={classes.select}
        />
    )
}

export default SelectInput
