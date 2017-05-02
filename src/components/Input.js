import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {

    onInput(e){
        this.context.updateField({
            name: this.props.name,
            value: e.target.value
        });
    }

    onBlur(e){
        this.context.blurField({
            name: this.props.name
        });
    }

    componentWillMount(){
        this.context.initField({
            name: this.props.name,
            class: 'form-group',
            value: null,
            required: false,
            disabled: false,
            status: 'pristiny',
            touched: false
        });
    }

    render(){
        const { name, ref } = this.props;
        return  (
            <div className={"form-group "+this.context.getFieldProps(this.props.name, 'class')}>
                <label>Input Label</label>
                <input
                    {...this.props}
                    name={name}
                    type="text"
                    onBlur={this.onBlur.bind(this)}
                    onInput={this.onInput.bind(this)}
                    ref={name}
                    value={this.context.getFieldProps(this.props.name, 'value')} />
            </div>
        )
    }
}

Input.contextTypes = {
  initField: PropTypes.func,
  updateField: PropTypes.func,
  blurField: PropTypes.func,
  getFieldProps: PropTypes.func
};

export default Input;
