import React from 'react';


const Input = (props) => {
    return (
        <input placeholder="Type here!"onChange={props.change.bind(this)} value={props.value} onKeyPress={props.keyPress.bind(this)} />
    )
}

export default Input;