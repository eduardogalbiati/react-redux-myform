import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'

import App from './containers/app'
import PageIndex from './containers/page-index'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PageIndex}/>
  </Route>
)
