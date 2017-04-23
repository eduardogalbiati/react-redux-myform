import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Option from './option.js';

class Select extends Component {
    onInput(e) {
        this.context.updateField(this.props.name, e.target.value);
    }

    componentWillMount(){
        this.context.initField(this.props.name, null);
    }

    render() {
        const { itens } = this.props;
        return (
            <label>Select Box
              <select
                {...this.props}
                onChange={this.onInput.bind(this)}>
                {itens.map(item =>
                    <Option
                        key={item.value}
                        value={item.value}
                        label={item.label}
                    />
                )}
              </select>
            </label>
        )
    }
}

Select.contextTypes = {
  initField: PropTypes.func,
  updateField: PropTypes.func,
  getField: PropTypes.func
};

export default Select;
