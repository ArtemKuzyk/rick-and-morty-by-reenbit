import React from 'react';
// import { CharactersProvider } from './hooks/useCharacters';
// import { CharacterData, DATA_URL } from './services/dataLoader';
// import { LocalStorageService, LS_KEYS } from './services/localStorage';
// import { Header } from './components/header';
// import { ContentList } from './components/content-list';
// import { PersonCart } from './components/pages/person-cart';
import AppRoutes from './routes/router';

import './App.css';

function App() {
  return (
    <div className="App">
        <AppRoutes />
    </div>
  );
}

export default App;
