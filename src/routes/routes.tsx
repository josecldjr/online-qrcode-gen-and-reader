import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AboutPage from '../container/default/about-page';
import HomePage from '../container/default/home';
import NotFoundPage from '../container/default/not-found';

function Routes() {

      return <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/about" exact strict component={AboutPage} />

            <Route path="*" exact strict component={NotFoundPage} />
      </Switch>
}

export default Routes