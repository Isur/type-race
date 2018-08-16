import React from 'react';


const Input = (props) => {
    return(
        <input onChange={props.change.bind(this)} value={props.value} onKeyPress={props.keyPress.bind(this)}/>
    )
}

export default Input;