import React, { useState } from 'react';
import { HashRouter } from 'react-router-dom';
import { LocalStorageService, LS_KEYS } from './services/localStorage';
import { CharactersProvider } from './hooks/useCharacters';
import AppRoutes from './routes/router';

import './App.css';

function App() {

  const [characterName, setCharacterName] = useState(LocalStorageService.get(LS_KEYS.NAME) || '');

  return (
    <div className="App">
      <HashRouter basename='/'>
        <CharactersProvider value={{characterName, setCharacterName}}>
        {/* <script async defer 
                crossOrigin="anonymous" 
                src="https://connect.facebook.net/ru_RU/sdk.js#xfbml=1&version=v16.0&appId=2268895256627157&autoLogAppEvents=1" 
                nonce="tOdeewMJ">
        </script>
        <div id="fb-root"></div>
        <div  className="fb-login-button" 
              data-width="300px" 
              data-size="" 
              data-button-type="" 
              data-layout="" 
              data-auto-logout-link="false" 
              data-use-continue-as="true">
        </div> */}
          <AppRoutes />
        </CharactersProvider>
      </HashRouter>
    </div>
  );
}

export default App;
