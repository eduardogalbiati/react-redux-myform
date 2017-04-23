import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { updateField, initField } from '../actions/form';

class MyForm extends Component {
    constructor(props){
        super(props);
        this.initField = this.initField.bind(this);
        this.updateField = this.updateField.bind(this);
        this.getField = this.getField.bind(this);
        this._onSubmit = this._onSubmit.bind(this);
    }

    updateField(name, value) {
        this.props.dispatch(
            updateField({
                form: this.props.name,
                name: name,
                value: value
            })
        );
    }

    initField(name, value) {
        this.props.dispatch(
            initField({
                form: this.props.name,
                name: name,
                value: value
            })
        );
    }

    getField(name){
        if(this.props.myForm[this.props.name] != undefined) {
            return this.props.myForm[this.props.name][name];
        }
    }

    _onSubmit(e){
        e.preventDefault();
        this.props.onSubmit(this.props.myForm[this.props.name]);
    }

    render() {
        const { children } = this.props;
        return (
            <form
                {...this.props}
                onSubmit={this._onSubmit}
            >
                {children}
            </form>
        )
    }

    getChildContext() {
        return {
          initField: this.initField,
          updateField: this.updateField,
          getField: this.getField
        };
    }
}

MyForm.childContextTypes = {
   initField: PropTypes.func,
   updateField: PropTypes.func,
   getField: PropTypes.func
}

const mapStateToProps = (state) => {
  const { dispatch, myForm } = state;
  return {
    dispatch,
    myForm
  }
}

export default connect(mapStateToProps)(MyForm);
