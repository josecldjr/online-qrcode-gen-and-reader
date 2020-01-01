import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import { NavLink as Link } from 'react-router-dom'
import Routes from './routes/routes'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'



const App: React.FC = () => {
  return <Router>
    <div className="App">
      <div>
        {/* Header and menu */}
        <Link to="/" > Home</Link>
        <Link to="/aaa" > Page1</Link>
        <Link to="/bbb" > Page 2</Link>
        <Link to="/--" > Not Found</Link>
      </div>

      <div>
        <Routes />
      </div>

      <div>
        {/* Footer */}
      </div>

    </div>
  </Router>
}

export default App
