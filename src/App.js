import React, { useEffect, useState } from 'react';
import { CharactersProvider } from './hooks/useCharacters';
import { CharacterData, DATA_URL } from './services/dataLoader';
import { LocalStorageService, LS_KEYS } from './services/localStorage';
import { Header } from './components/header';
import { ContentCart } from './components/content-cart';

import './App.css';

function App() {

  const [character, setCharacter] = useState(LocalStorageService.get(LS_KEYS.CHARACTERS) || '');

  // console.log(character)
  useEffect(() => {
    CharacterData.set(DATA_URL.PATH);
    setCharacter(LocalStorageService.get(LS_KEYS.CHARACTERS));
  }, []);

  useEffect(() => console.log(typeof character))

  return (
    <div className="App">
      {/* <CharactersProvider> */}
        <Header />
        <main>
          {character.map(data => <ContentCart key={data.id} data={data}/>)}
        </main>
        {/* <ContentCart /> */}
      {/* </CharactersProvider> */}
    </div>
  );
}

export default App;
