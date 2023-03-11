
import shape from '../../../../../assets/Shape.svg'
import vector from '../../../../../assets/Vector.svg'
import './searchField.css';

export function SearchField() {


    return(
        <form>
            <div className='search-field'>
                <label htmlFor='search'>Search</label>
                <input type='text' id='search' placeholder='Filter by name...'></input>
                <img src={vector} alt='searchImg' />
                <img src={shape} alt='shape' />
            </div>
        </form>
    );
}