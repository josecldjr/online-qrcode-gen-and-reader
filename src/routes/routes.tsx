import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';

import ConditionalRender from '../component/conditional-render';
import AboutPage from '../container/default/about-page';
import HomePage from '../container/default/home';
import NotFoundPage from '../container/default/not-found';
import { AppContext, IAppContext } from '../context/app-context';

 

function Routes () {
      const { isLoggedIn } = useContext<IAppContext>(AppContext)
   
      
      return <ConditionalRender condition={isLoggedIn}>
            <Switch>
            <Route path="/" exact   component={HomePage} />
            <Route path="/about" exact strict component={AboutPage} />

            <Route path="*" exact strict component={NotFoundPage} />
      </Switch>
      </ConditionalRender>
}

export default Routes