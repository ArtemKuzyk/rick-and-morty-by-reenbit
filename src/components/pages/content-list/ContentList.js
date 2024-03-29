// import { LocalStorageService } from '../../services/localStorage';
import { useState, useEffect } from 'react';
// import { useTransition } from 'react';
import { Link } from 'react-router-dom';
import { useCharacters } from '../../../hooks/useCharacters';
import { LocalStorageService, LS_KEYS } from '../../../services/localStorage';
import { CharacterData, DATA_URL } from '../../../services/dataLoader';
import { Header } from './header'
import { ContentCart } from './content-cart/ContentCart';
import { Pagination } from './pagination/Pagination';
import './content-list.css'
import { ErrorPage } from '../404page/ErrorPage';

export function ContentList(){

    const {characterName} = useCharacters();
    // const [isPending, startTransition] = useTransition();
    const [currentPage, setCurrentPage] = useState(1);
    const [characters, setCharacters] = useState(LocalStorageService.get(LS_KEYS.CHARACTERS) || null);


    useEffect(() => {
        CharacterData.set(DATA_URL.PATH)
        .then(() => setCharacters(LocalStorageService.get(LS_KEYS.CHARACTERS)));
    }, []);

    useEffect(() => {
        if(characterName){
            setCharacters(LocalStorageService.remove(LS_KEYS.CHARACTERS));
            CharacterData.set(DATA_URL.PATH + `/?name=${characterName}`)
            .then(() => setCharacters(LocalStorageService.get(LS_KEYS.CHARACTERS)));
        } else {
            setCharacters(LocalStorageService.remove(LS_KEYS.CHARACTERS));
            CharacterData.set(DATA_URL.PATH)
            .then(() => setCharacters(LocalStorageService.get(LS_KEYS.CHARACTERS)));
        }
        if(currentPage !== 1){
            setCurrentPage(1);
        }
    }, [characterName]);

    useEffect(() => {
        setCharacters(LocalStorageService.remove(LS_KEYS.CHARACTERS));
        if(characterName === '') {
            CharacterData.set(DATA_URL.PATH + `/?page=${currentPage}`)
            .then(() => setCharacters(LocalStorageService.get(LS_KEYS.CHARACTERS)));
        } else {
            CharacterData.set(DATA_URL.PATH + `/?page=${currentPage}&name=${characterName}`)
            .then(() => setCharacters(LocalStorageService.get(LS_KEYS.CHARACTERS)));
        }
        console.log(characters)
    }, [currentPage])

    return(
        <>
            <Header />
            <main>
                {Array.isArray(characters)
                ? characters.map(el => {
                    return (<Link to='/person' key={el.id} state={{ data : el }} >
                        <ContentCart  data={el} />
                    </Link>);
                }) 
                : <ErrorPage />}
            </main>
            {
                (LocalStorageService.get(LS_KEYS.INFO)?.pages > 1) 
                ? <Pagination data={[currentPage, LocalStorageService.get(LS_KEYS.INFO).pages, setCurrentPage]}/> 
                : ''
            }
        </>
    );
}