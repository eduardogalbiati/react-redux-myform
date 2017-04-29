import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
    onInput(e){
        this.context.updateField(this.props.name, e.target.value);
    }

    componentWillMount(){
        this.context.initField(this.props.name, null);
    }

    render(){
        const { name, ref } = this.props;
        return  (
            <label>Input Label
               <input
               {...this.props}
                name={name}
                type="text"
                onInput={this.onInput.bind(this)}
                ref={name}
                value={this.context.getField(this.props.name)}
                />
            </label>
        )
    }
}

Input.contextTypes = {
  initField: PropTypes.func,
  updateField: PropTypes.func,
  getField: PropTypes.func
};

export default Input;
