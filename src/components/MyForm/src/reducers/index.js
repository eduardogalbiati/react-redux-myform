export default function myForm(state, action) {
  switch (action.type) {
    case 'FIELD_UPDATE':
        return {
            ...state,
            [action.payload.form]:{
                ...state[action.payload.form],
                [action.payload.name]: {
                    ...state[action.payload.form][action.payload.name],
                    value: action.payload.value,
                    status: 'dirty',

                }
            }
        };
    case 'FIELD_BLUR':
        return {
            ...state,
            [action.payload.form]:{
                ...state[action.payload.form],
                [action.payload.name]: {
                    ...state[action.payload.form][action.payload.name],
                    touched: true
                }
            }
        };

    case 'FIELD_INIT':
        return {
            ...state,
            [action.payload.form]:{
                ...state[action.payload.form],
                [action.payload.name]: action.payload
            }
        };

    default:
      return {...state}
  }
}
