import * as ActionTypes from '../actions'
import myForm from '../components/MyForm/src/reducers/index';
import { routeReducer } from 'react-router-redux'
import { combineReducers } from 'redux'
import update from 'react-addons-update'

function notifications(state = {callouts: []}, action) {
  switch (action.type) {

    case ActionTypes.CREATE_CALLOUT:
      return update(state, {callouts: {$push: [action.payload]}})

    case ActionTypes.REMOVE_CALLOUT:
      const { id } = action.payload
      const index = state.callouts.map(item => item.id).indexOf(id)
      return update(state, {callouts: {$splice: [[index, 1]]}})

    default:
      return state
  }
}
<<<<<<< HEAD
<<<<<<< Updated upstream
=======
=======
>>>>>>> 1a4979bb47c37f5dd59854f0dce20c214c69841a

const rootReducer = combineReducers({
  routing: routeReducer,
  notifications,
<<<<<<< HEAD
  myForm,
})

export default rootReducer
>>>>>>> Stashed changes
=======
  myForm
})

export default rootReducer
>>>>>>> 1a4979bb47c37f5dd59854f0dce20c214c69841a
