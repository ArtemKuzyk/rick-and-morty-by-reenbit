// import { LocalStorageService } from '../../services/localStorage';
import { useState, useEffect } from 'react';
import { useTransition } from 'react';
import { Link } from 'react-router-dom';
import { useCharacters } from '../../../hooks/useCharacters';
import { LocalStorageService, LS_KEYS } from '../../../services/localStorage';
import { CharacterData, DATA_URL } from '../../../services/dataLoader';
import { Header } from './header'
import { ContentCart } from './content-cart/ContentCart';
import './content-list.css'

export function ContentList(){

    const {characterName, setCharacterName} = useCharacters();
    const [isPending, startTransition] = useTransition();

    const [characters, setCharacters] = useState(LocalStorageService.get(LS_KEYS.CHARACTERS) || null);


    useEffect(() => {
        CharacterData.set(DATA_URL.PATH)
        .then(() => setCharacters(LocalStorageService.get(LS_KEYS.CHARACTERS)));
    }, []);

    useEffect(() => {
        console.log(characterName);
        if(characterName){
            setCharacters(LocalStorageService.remove(LS_KEYS.CHARACTERS));
            CharacterData.set(DATA_URL.PATH + `/?name=${characterName}`)
            .then(() => setCharacters(LocalStorageService.get(LS_KEYS.CHARACTERS)));
        } else {
            setCharacters(LocalStorageService.remove(LS_KEYS.CHARACTERS));
            CharacterData.set(DATA_URL.PATH)
            .then(() => setCharacters(LocalStorageService.get(LS_KEYS.CHARACTERS)));
        }
    }, [characterName]);

    return(
        <>
            <Header />
            <main>
                {Array.isArray(characters)?
                characters.map(el => {
                    return (<Link to='/person' key={el.id} state={{ data : el }} >
                        <ContentCart  data={el} />
                    </Link>);
                }):null}
            </main>
        </>
    );
}