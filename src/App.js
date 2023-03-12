import React, { useState, useEffect } from 'react';
// import { CharactersProvider } from './hooks/useCharacters';
import { CharacterData, DATA_URL } from './services/dataLoader';
import { LocalStorageService, LS_KEYS } from './services/localStorage';
// import { Header } from './components/header';
// import { ContentList } from './components/content-list';
// import { PersonCart } from './components/pages/person-cart';
import { CharactersProvider } from './hooks/useCharacters';
import AppRoutes from './routes/router';

import './App.css';

function App() {

  const [characterName, setCharacterName] = useState(LocalStorageService.get(LS_KEYS.NAME) || '');
  // useEffect(() => {
  //   CharacterData.set(DATA_URL.PATH);
  //   // setCharacters(LocalStorageService.get(LS_KEYS.CHARACTERS));
  // }, []);

  return (
    <div className="App">
      <CharactersProvider value={{characterName, setCharacterName}}>
        <AppRoutes />
      </CharactersProvider>
    </div>
  );
}

export default App;
