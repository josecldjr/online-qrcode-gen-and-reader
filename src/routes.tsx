import React from  'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'


const Home = () => <h2>HOME</h2>

const Page1 = () => <h2>PAGE 1</h2>

const Page2 = () => <h2>PAGE 2</h2>

const NotFound = () => <h2>Not found</h2>

function Routes () {
  return <Switch>
            <Route path="/" exact   component={Home} />
            <Route path="/aaa" exact strict component={Page1} />
            <Route path="/bbb" exact strict component={Page2} />
            <Route path="*" exact strict component={NotFound} />
      </Switch>
   
}

export default Routes