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
          <AppRoutes />
        </CharactersProvider>
      </HashRouter>
    </div>
  );
}

export default App;
