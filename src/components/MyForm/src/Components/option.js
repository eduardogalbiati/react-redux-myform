import React, { Component } from 'react';

class Option extends Component {
    render() {
        const { value, label } = this.props;
        return (
            <option value={value}>{label}</option>
        )
    }
}

export default Option;
