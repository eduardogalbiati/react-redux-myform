# React-Redux-myform
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

#### Rendering the form

```jsx
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

With these lines, myform will automatcally create a index on ```Store``` with the form data using the form name as index,
it should be like ```Store.myForm``` with values

```
customForm : {
    email: null,
    firstname: null,
    lastname: null

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
