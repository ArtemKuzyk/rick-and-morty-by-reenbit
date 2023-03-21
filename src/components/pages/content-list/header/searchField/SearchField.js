import { useCharacters } from '../../../../../hooks/useCharacters';
import { LocalStorageService, LS_KEYS } from '../../../../../services/localStorage';
import shape from '../../../../../assets/Shape.svg'
import vector from '../../../../../assets/Vector.svg'
import './searchField.css';
import { useEffect, useState } from 'react';

export function SearchField() {

    // const searchQuery = document.querySelector('#search');
    const {characterName, setCharacterName} = useCharacters();
    // const [currentQueryText, setCurrentQueryText] = useState(LocalStorageService.get(LS_KEYS.NAME) || '');

    useEffect(() => {
        LocalStorageService.set(LS_KEYS.NAME, characterName);
    }, [characterName]);
    // const handleClickButton = (e) => {
    //     e.preventDefault();
    //     LocalStorageService.set(LS_KEYS.NAME, searchQuery.value);
    //     setCharacterName(searchQuery.value);
    // }

    // const handleQueryTextChange = () =>{
    //     setCurrentQueryText(searchQuery.value);
    // }tBookArray, initialBookArray, searchQuery])


    return(
        <form>
            <div className='search-field'>
                <label htmlFor='search'>Search</label>
                <input  type='text' 
                        id='search' 
                        placeholder='Filter by name...'
                        onChange={(e) => setCharacterName(e.target.value)} >
                </input>
                <button className='button__left' /*onClick={(e) => handleClickButton(e)}*/>
                    <img src={vector} alt='searchImg' />
                </button>
                <button className='button__right'>
                    <img src={shape} alt='shape' />
                </button>
            </div>
        </form>
    );
}