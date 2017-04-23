# React-Redux-myform
  - The main concept here is to abstract any form>field interaction, dispatching actions to Store automatically and managing the submit callBack
  - This code will be extracted to npm, for now there is only the implementation example on code.
  - Built on [React-Redux-Foundation Boilerplate](https://github.com/timaschew/react-redux-foundation-boilerplate) a Minimal Boilerplate for Redux + React + React-Router-Redux and Foundation

## Usage

```
npm i
npm start
```

Open [localhost:3000](http://localhost:3000)

Use `CTRL + H` to toggle the Redux Dock Monitor

## Implementation examples

### Registering reducers

```jsx
import myForm from '../components/MyForm/src/reducers/index';

const rootReducer = combineReducers({
  reducers,
  myForm
})
```

#### Rendering the form


```jsx
import Input from './MyForm/src/components/input';
import MyForm from './MyForm/src/components/form';
import SubmitButton from './MyForm/src/components/submitButton';

render() {
    return (
        <MyForm name="customform">
          <Input name="email"/>
          <Input name="firstname"/>
          <Input name="lastname"/>
          <SubmitButton className="primary button expanded"/>
        </MyForm>
    )
}
```

On render, myform will automatically create a index on ```Store``` with the form data using the form name as index, Dispatching the action:


```jsx
return {
      type: 'FIELD_INIT',
      payload: {
        data
      }
    }
```

the  ```Store.myForm``` will be filled with the folowing json:

```
customForm : {
    email: null,
    firstname: null,
    lastname: null

}
```

#### Handling changes

Every time a input is changed, an FIELD_UPDATE action will be dispatched and the store will be updated with values
```jsx
return {
      type: 'FIELD_UPDATE',
      payload: {
        data
      }
    }
```

#### Submiting the form

Just add ```onSubmit``` on form, and bind a callBack to handle form data

```jsx

submit(formData){
    console.log('Submited with this data:')
    console.log(formData);
}

render() {
    return (
        <MyForm
            name="customform"
            onSubmit={this.submit}>
          <Input name="email"/>
          <Input name="firstname"/>
          <Input name="lastname"/>
          <SubmitButton className="primary button expanded"/>
        </MyForm>
    )
}
```

#### Example
  ![alt tag](https://raw.githubusercontent.com/eduardogalbiati/react-redux-myform/master/docs/example.png) 


#### Todo
  - [] Extract into a NPM module
  - [] Add new elements
    - [x] Input
    - [x] Select
    - [] Radio
    - [] Checkbox
    - [] Textarea

