import * as React from 'react';
import { BrowserRouter as Router, NavLink as Link } from 'react-router-dom';
import './App.css';
import { AppContextProvider } from './context/app-context';
import Routes from './routes/routes';




const App: React.FC = () => {


  return <AppContextProvider>
    <Router>
      <div className="App">
        <div>
          {/* Header and menu */}
          <Link to="/" > Home</Link>
        </div>

        <div>
          <Routes />
        </div>


        <div>
          {/* Footer */}
        </div>

      </div>
    </Router>
  </AppContextProvider>
}

export default App
