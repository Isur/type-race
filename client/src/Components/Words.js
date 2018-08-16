import React from 'react';
const color = (good) => {
    if(good)
        return "green";
    else
        return "red";
    }
const Words = (props) => {
    return(
       <div> 
           <h2 style={{color: color(props.good)}}> {props.firstWord} </h2>
            {props.words.length > 0 && props.words.map(word => (
                <p key={word}> {word} </p>
            ))}
        </div>
    )
}

export default Words;