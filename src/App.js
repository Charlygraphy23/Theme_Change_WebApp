import React, {useState} from 'react';
import './App.css';
import User from './components/two/User'
import ThemeContext from './context/ThemeContext'
import Provider from './context/Provider'

function App() {
  
  const themeHook = useState('light')

  return (
      <Provider >
        <ThemeContext.Provider value={themeHook}>
            <User/>
        </ThemeContext.Provider>
      </Provider>
  );
}

export default App;
