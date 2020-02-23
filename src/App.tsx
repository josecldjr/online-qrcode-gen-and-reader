import './App.css';

import * as React from 'react';
import { useContext } from 'react';
import { BrowserRouter as Router, NavLink as Link } from 'react-router-dom';

import { AppContextProvider } from './context/app-context';
import Routes from './routes/routes';


const App: React.FC = () => {
 
  
  return <AppContextProvider>
      <Router>
            <div className="App">
              <div>
                {/* Header and menu */}
                <Link to="/" > Home</Link>
                <Link to="/about" > About</Link> 
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
  </AppContextProvider>
}

export default App
