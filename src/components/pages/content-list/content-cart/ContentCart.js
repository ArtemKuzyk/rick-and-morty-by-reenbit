export function ContentCart(props){
    const data = props.data;
    let name = '';
    if(data.name.length > 15){
        name = data.name.slice(0, 15) + '...';
    } else {
        name = data.name;
    }

    return(
        <div className='content_container'>
            <div className='image-container'>
                <img className='person-image' src={data.image} alt={data.name}/>
            </div>
            <div className='info-container'>
                <h6 className='fullname'>{name}</h6>
                <p className='type-of-person'>{data.species}</p>
            </div>
        </div>
    );
}