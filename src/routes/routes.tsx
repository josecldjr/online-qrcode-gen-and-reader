import React from  'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import HomePage from '../container/default/Home'
import NotFoundPage from '../container/default/not-found'
import AboutPage from '../container/default/about-page'

 

function Routes () {
  return <Switch>
            <Route path="/" exact   component={HomePage} />
            <Route path="/about" exact strict component={AboutPage} />

            <Route path="*" exact strict component={NotFoundPage} />
      </Switch>
}

export default Routes