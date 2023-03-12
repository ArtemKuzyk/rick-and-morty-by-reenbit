import { useCharacters } from '../../../../../hooks/useCharacters';
import { LocalStorageService, LS_KEYS } from '../../../../../services/localStorage';
import shape from '../../../../../assets/Shape.svg'
import vector from '../../../../../assets/Vector.svg'
import './searchField.css';
import { useState } from 'react';

export function SearchField() {

    const searchQuery = document.querySelector('#search');
    const {characterName, setCharacterName} = useCharacters();
    const [currentQueryText, setCurrentQueryText] = useState(LocalStorageService.get(LS_KEYS.NAME) || '');
    const handleClickButton = (e) => {
        e.preventDefault();
        LocalStorageService.set(LS_KEYS.NAME, searchQuery.value);
        setCharacterName(searchQuery.value);
    }

    const handleQueryTextChange = () =>{
        setCurrentQueryText(searchQuery.value);
    }

    return(
        <form>
            <div className='search-field'>
                <label htmlFor='search'>Search</label>
                <input type='text' id='search' placeholder='Filter by name...' onChange={() => handleQueryTextChange()} value={currentQueryText}></input>
                <button className='button__left' onClick={(e) => handleClickButton(e)}>
                    <img src={vector} alt='searchImg' />
                </button>
                <button className='button__right'>
                    <img src={shape} alt='shape' />
                </button>
            </div>
        </form>
    );
}