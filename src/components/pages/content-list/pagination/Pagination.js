// import { Link } from 'react-router-dom';
import './paginstion.css'


//currentPage is active page
export function Pagination(props){

    const [currentPage, pageCount, setCurrentPage] = props.data;
    const min = 1, max = pageCount;

    const handleSetCurrentPage = (e) => {
        if(Number.isInteger(e)){
            if(e < min || e > max){
                return;
            }
            setCurrentPage(e);
        } else {
            setCurrentPage(e.target.innerHTML);
        }
    }

    const topFunction = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    return(
        <div className='pagination'>
            <button onClick={()=>{handleSetCurrentPage(currentPage - 1); topFunction();}}>&#8592;</button>
            <button className={(+currentPage === min ? 'active' : null)} onClick={(e)=>{handleSetCurrentPage(e); topFunction();}}>{min}</button>
            {+currentPage > min + 3 ? <span className='pagination-button-dispaly' >...</span> : null}
            {+currentPage === min || currentPage - 2 === min || currentPage - 2 < min ? null : <button onClick={(e)=>{handleSetCurrentPage(e); topFunction();}} className='pagination-button-dispaly'>{currentPage - 2}</button>}
            {+currentPage === min || currentPage - 1 === min ? null : <button onClick={(e)=>{handleSetCurrentPage(e); topFunction();}} className='pagination-button-dispaly'>{currentPage - 1}</button >}
            {+currentPage === max || +currentPage === min ? null : <button className='active'>{currentPage}</button>}
            {+currentPage === max || +currentPage + 1 === max ? null : <button onClick={(e)=>{handleSetCurrentPage(e); topFunction();}} className='pagination-button-dispaly'>{+currentPage + 1}</button>}
            {+currentPage === max || +currentPage + 2 === max ||  +currentPage + 2 > max ? null : <button onClick={(e)=>{handleSetCurrentPage(e); topFunction();}} className='pagination-button-dispaly'>{+currentPage + 2}</button>}
            {+currentPage < max - 3 ? <span className='pagination-button-dispaly' >...</span> : null}
            <button className={(+currentPage === max ? 'active' : null)} onClick={(e)=>{handleSetCurrentPage(e); topFunction();}}>{max}</button>
            <button onClick={()=>{handleSetCurrentPage(+currentPage + 1); topFunction();}}>&#8594;</button>
        </div>
    );
}