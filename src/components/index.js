import React, { Component, PropTypes } from 'react'
import Input from './MyForm/src/components/input';
import Select from './MyForm/src/components/select';
import MyForm from './MyForm/src/components/form';
import SubmitButton from './MyForm/src/components/submitButton';

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "selected": "",
            "anotherIndex": "123",
            "itens": [
                {
                    "value": "husker",
                    "label": "Husker"
                },
                {
                    "value": "starbuck",
                    "label": "Starbuck"
                },
                {
                    "value": "hotdog",
                    "label": "Hot Dog"
                },
                {
                    "value": "apollo",
                    "label": "Husker"
                },
                {
                    "value": "newone",
                    "label": "NewOne"
                }
            ]
        }
    }

    submit(formData){
        console.log('Submited with this data:')
        console.log(formData);
    }

    render() {
        return (
            <div>
              <MyForm
                name="customform"
                onSubmit={this.submit}>
                <h1>MyForm example</h1>
                <div className="row large-4 columns">
                  <div className="large-12 columns">
                    <Input name="email"/>
                  </div>
                </div>
                <div className="row large-4 columns">
                  <div className="large-6 columns">
                     <Input name="firstname"/>
                  </div>
                  <div className="large-6 columns">
                     <Input name="lastname"/>
                  </div>
                </div>
                <div className="row large-4 columns">
                  <div className="large-12 columns">
                   <Select itens={this.state.itens} name="dogs"/>
                  </div>
                </div>
                <div className="row large-4 columns">
                    <SubmitButton className="primary button expanded"/>
                </div>
              </MyForm>
            </div>
        )
  }
}
