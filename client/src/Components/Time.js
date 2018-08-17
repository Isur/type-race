import React from 'react';
import ReactCountdownClock from 'react-countdown-clock';


class Time extends React.Component{
    constructor(props){
        super(props);
    }

    shouldComponentUpdate(){
        return false
     }
render(){    
    return(
        <h3> <ReactCountdownClock seconds={this.props.time} onComplete={this.props.end} /></h3>
    )
}
}

export default Time;