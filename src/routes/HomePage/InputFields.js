import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({

    input: {
        width: "100%",
        padding: 20,
        boxSizing: "borderBox",
        marginBottom: 25,
        border: "2px solid #e9eaea",
        fontSize: 14,
        borderRadius: 5,
        outline: "none",
        transition: "all 0.5s ease",
    },



})

function InputComponent({ className, type, placeholder }) {
    const classes = useStyles();
    return (
        <div className={className}>
            {
                type === '' ? <textarea style={{ height: 160 }} className={classes.input} placeholder={placeholder}></textarea> :
                    <input type={type} className={classes.input} placeholder={placeholder} />
            }

        </div>
    )

}

export default InputComponent