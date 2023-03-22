import React, { useState } from 'react';
import { HashRouter } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import { LocalStorageService, LS_KEYS } from './services/localStorage';
import { CharactersProvider } from './hooks/useCharacters';
import { UserIcon } from './components/pages/userIcon/UserIcon';
import AppRoutes from './routes/router';

import './App.css';

function App() {

  const [characterName, setCharacterName] = useState(LocalStorageService.get(LS_KEYS.NAME) || '');
  const [userName, setUserName] = useState(LocalStorageService.get(LS_KEYS.USER) || '');
  const responseFacebook = (response) => {
    setUserName(response.name)
    LocalStorageService.set(LS_KEYS.USER, response.name)
  }

  return (
    <div className="App">
      <HashRouter basename='/'>
        <CharactersProvider value={{characterName, setCharacterName}}>
        {(userName)
        ? <UserIcon state={userName} />
        : <FacebookLogin
              appId="1088597931155576"
              autoLoad={true}
              fields="name,email,picture"
              // onClick={componentClicked}
              callback={responseFacebook} />
        }
          <AppRoutes />
        </CharactersProvider>
      </HashRouter>
    </div>
  );
}

export default App;
