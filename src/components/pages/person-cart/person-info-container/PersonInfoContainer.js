export function PersonInfoContainer(props){
    const data = props.data;
    const subtitle = Object.keys(data);
    let value = data[Object.keys(data)];
    if(typeof value === 'object'){
        if(Object.keys(value).includes('name')){
            value = value['name'];
        }
    }
    if(!value){
        value = 'Unknown';
    }
    return(
        <div className='person-info_container'>
            <p className='person-info_subtitle'>{subtitle}</p>
            <p className='person-info_field'>{value}</p>
            <hr className="divider" />
        </div>
    );
}