// import { LocalStorageService } from '../../services/localStorage';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LocalStorageService, LS_KEYS } from '../../../services/localStorage';
import { CharacterData, DATA_URL } from '../../../services/dataLoader';
import { Header } from './header'
import { ContentCart } from './content-cart/ContentCart';
import './content-list.css'

export function ContentList(){

    const [characters, setCharacters] = useState(LocalStorageService.get(LS_KEYS.CHARACTERS) || '');

    useEffect(() => {
        CharacterData.set(DATA_URL.PATH);
        setCharacters(LocalStorageService.get(LS_KEYS.CHARACTERS));
    }, []);

    return(
        <>
            <Header />
            <main>
                { characters.map(el => {
                    return (<Link to='/person' key={el.id} state={{ data : el }} >
                        <ContentCart  data={el} />
                    </Link>);
                })}
            </main>
        </>
    );
}