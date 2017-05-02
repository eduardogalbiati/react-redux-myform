import { createStore, applyMiddleware, compose } from 'redux'
import { syncHistory } from 'react-router-redux'
import { browserHistory } from 'react-router'
import DevTools from '../containers/dev-tools'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'
import customMiddleware from '../middleware'

const reduxRouterMiddleware = syncHistory(browserHistory)

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk, customMiddleware, reduxRouterMiddleware, createLogger()),
<<<<<<< HEAD
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
=======
      DevTools.instrument()
>>>>>>> 1a4979bb47c37f5dd59854f0dce20c214c69841a
    )
  )

  // Required for replaying actions from devtools to work
  reduxRouterMiddleware.listenForReplays(store)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
