import React, { useEffect, useState } from 'react';
import { CharactersProvider } from './hooks/useCharacters';
import { CharacterData, DATA_URL } from './services/dataLoader';
import { LocalStorageService, LS_KEYS } from './services/localStorage';
import { Header } from './components/header';
import { ContentList } from './components/content-list';
import { PersonCart } from './components/pages/person-cart/PersonCrat';

import './App.css';

function App() {

  const [character, setCharacter] = useState(LocalStorageService.get(LS_KEYS.CHARACTERS) || '');

  // console.log(character)
  useEffect(() => {
    CharacterData.set(DATA_URL.PATH);
    setCharacter(LocalStorageService.get(LS_KEYS.CHARACTERS));
  }, []);

  //useEffect(() => console.log(typeof character))

  return (
    <div className="App">
      {/* <CharactersProvider> */}
        {/* <Header /> */}
        <main>
          {/* {character.map(data => <ContentList key={data.id} data={data}/>)} */}
          <PersonCart data={character[0]}/>
        </main>
        {/* <ContentCart /> */}
      {/* </CharactersProvider> */}
    </div>
  );
}

export default App;
