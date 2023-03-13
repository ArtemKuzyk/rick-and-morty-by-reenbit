import { Link } from 'react-router-dom';
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

    return(
        <div className='pagination'>
            <Link onClick={()=>{handleSetCurrentPage(currentPage - 1)}}>&#8592;</Link>
            <Link className={(+currentPage === min ? 'active' : null)} onClick={(e)=>{handleSetCurrentPage(e)}}>{min}</Link>
            {+currentPage > min + 3 ? <span className='pagination-link-dispaly' >...</span> : null}
            {+currentPage === min || currentPage - 2 === min || currentPage - 2 < min ? null : <Link onClick={(e)=>{handleSetCurrentPage(e)}} className='pagination-link-dispaly'>{currentPage - 2}</Link>}
            {+currentPage === min || currentPage - 1 === min ? null : <Link onClick={(e)=>{handleSetCurrentPage(e)}} className='pagination-link-dispaly'>{currentPage - 1}</Link >}
            {+currentPage === max || +currentPage === min ? null : <Link className='active'>{currentPage}</Link>}
            {+currentPage === max || +currentPage + 1 === max ? null : <Link onClick={(e)=>{handleSetCurrentPage(e)}} className='pagination-link-dispaly'>{+currentPage + 1}</Link>}
            {+currentPage === max || +currentPage + 2 === max ||  +currentPage + 2 > max ? null : <Link onClick={(e)=>{handleSetCurrentPage(e)}} className='pagination-link-dispaly'>{+currentPage + 2}</Link>}
            {+currentPage < max - 3 ? <span className='pagination-link-dispaly' >...</span> : null}
            <Link className={(+currentPage === max ? 'active' : null)} onClick={(e)=>{handleSetCurrentPage(e)}}>{max}</Link>
            <Link onClick={()=>{handleSetCurrentPage(+currentPage + 1)}}>&#8594;</Link>
        </div>
    );
}