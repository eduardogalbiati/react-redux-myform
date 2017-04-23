
const initialState = {}

function mergeValuesWithState(state, payload){
    let arr = {...state};
    arr[payload.data.form] = {...state[payload.data.form]}
    arr[payload.data.form][payload.data.name] = payload.data.value;
    return arr;
}

function mergeFormIndex(state, form){
    let arr = {...state};
    arr[payload.data.form] = {}
}

export default function myForm(state = initialState, action) {
  switch (action.type) {
    case 'FIELD_UPDATE':
        let updates = mergeValuesWithState(state, action.payload);
        return {
            ...state,
            ...updates
        };

    case 'FIELD_INIT':
        let init = mergeValuesWithState(state, action.payload);
        console.log(init);
        return {
            ...state,
            ...init
        };

    default:
      return {...state}
  }
}
