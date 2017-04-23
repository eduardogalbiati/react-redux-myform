import React, { Component } from 'react';

class SubmitButton extends Component {
    render(){
        return (
            <button
                {...this.props}
                type="submit"
            >
            Submit</button>
        )
    }
}

export default SubmitButton
