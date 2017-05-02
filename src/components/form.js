import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { updateField, initField, blurField } from '../actions/form';

class MyForm extends Component {
    constructor(props){
        super(props);
        this.initField = this.initField.bind(this);
        this.updateField = this.updateField.bind(this);
        this.blurField = this.blurField.bind(this);
        this.getFieldProps = this.getFieldProps.bind(this);
        this._onSubmit = this._onSubmit.bind(this);

    }

    updateField(state) {
        this.props.dispatch(
            updateField({
                ...state,
                form: this.props.name
            })
        );
    }

    initField(initialState) {
        this.props.dispatch(
            initField({
                ...initialState,
                form: this.props.name
            })
        );
    }

    blurField(state) {
        this.props.dispatch(
            blurField({
                ...state,
                form: this.props.name
            })
        );
    }

    getFieldProps(name, prop){
        if(this.props.myForm[this.props.name] != undefined) {
            if(this.props.myForm[this.props.name][name] != undefined) {
                if(this.props.myForm[this.props.name][name][prop]){
                    return this.props.myForm[this.props.name][name][prop];
                }
            }
        }
        return '';
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
          blurField: this.blurField,
          getFieldProps: this.getFieldProps
        };
    }
}

MyForm.childContextTypes = {
   initField: PropTypes.func,
   updateField: PropTypes.func,
   blurField: PropTypes.func,
   getFieldProps: PropTypes.func
}

const mapStateToProps = (state) => {
  const { dispatch, myForm } = state;
  return {
    dispatch,
    myForm
  }
}

export default connect(mapStateToProps)(MyForm);
