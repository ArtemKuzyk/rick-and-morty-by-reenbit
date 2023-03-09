import { SearchField } from './searchField';
import image from '../../assets/r-m-image.svg'
import './header.css';

export function Header(){
    return(
        <header>
            <img src={image} alt='Rick & Morty'/>
            <SearchField />
        </header>
    );
}