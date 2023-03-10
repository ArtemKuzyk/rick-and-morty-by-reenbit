

import './content-list.css'

export function ContentList(props){

    let data = props.data;
    console.log(data)
    return(
        <div className='content_container'>
            <div className='image-container'>
                <img className='person-image' src={data.image} alt={data.name}/>
            </div>
            <div className='info-container'>
                <h6 className='fullname'>{data.name}</h6>
                <p className='type-of-person'>{data.species}</p>
            </div>
        </div>
    );
}