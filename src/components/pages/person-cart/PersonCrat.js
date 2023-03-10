import { PersonInfoContainer } from './person-info-container/PersonInfoContainer';

import backArrow from '../../../assets/arrow_back_24px.svg';
import './person-cart.css';

const information = ['gender', 'status', 'species', 'origin', 'type'];

export function PersonCart(props){
    const data = props.data;
    // console.log(data)
    return(
        <div className='cart_container'>
            {/* <div className='go-back_container'> */}
                <button className='cart_go-back-button'><img src={backArrow} alt='back' />GO BACK</button>
            {/* </div> */}
            <img src={data.image} alt={data.name} className='cart_image'/>
            <h3 className='cart_person-name'>{data.name}</h3>
            <div className='cart_person-info'>
                <h6>Informations</h6>
                {information.map(el => <PersonInfoContainer key={data[el]} data={{[el] : data[el]}}/>)}
            </div>
        </div>
    );
}