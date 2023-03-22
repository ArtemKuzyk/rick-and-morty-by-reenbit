import avatar from '../../../assets/avatar.png'
import './user-icon.css'


export function UserIcon(props){
    const userName = props.state;
    console.log(props)
    return(
        <div className='user-info'>
            <img src={avatar} alt="avatar"/>
            <p>{userName}</p>
        </div>
    );
}