
import React, { useContext } from "react";

const CharactersContext = React.createContext({});

export const CharactersProvider = CharactersContext.Provider;

export const useSpecificBook = () => useContext(CharactersContext);