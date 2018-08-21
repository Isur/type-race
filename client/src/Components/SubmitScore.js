import React from 'react';
import API from '../config/api_calls';

class SubmitScore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
    }

    onChange = (event) => {
        this.setState({
            input: event.target.value
        })
    }

    submit = () => {
        API.postResult(this.state.input, this.props.score)
            .then((res) => this.props.back());
    }

    render() {
        return (
            <div>
                <input type='text' placeholder="nick" value={this.state.input} onChange={this.onChange} />
                <button onClick={this.submit}> ZAPISZ </button>
            </div>
        )
    }
}

export default SubmitScore;