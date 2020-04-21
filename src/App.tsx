import * as React from 'react';
import { BrowserRouter as Router, NavLink as Link } from 'react-router-dom';
import './App.css';
import { AppContextProvider } from './context/app-context';
import Routes from './routes/routes';
import { Button, Grid } from '@material-ui/core';

const App: React.FC = () => {

  return <AppContextProvider>
    <Router>
      <Grid className="App">

        <Grid>
          <Routes />
        </Grid>

      </Grid>
    </Router>

  </AppContextProvider>
}

export default App
