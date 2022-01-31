import React, {useState} from 'react';
import axios from "axios";
import userSocket from '../../socket';

const JoinBlock = () => {

    const [roomId, setRoomId] = useState('');
    const [userName, setUserName] = useState('');


    const onEnter = () => {
        if(!roomId || !userName){
            return  alert('Incorrect data')
        }
        console.log(roomId, userName)
            axios.post('/rooms', {
                roomId,
                userName
            })
    }

    return (
        <div className="join-block">
            <input type="text" placeholder="Room ID" value={roomId} onChange={(e => setRoomId(e.target.value))}/>
            <input type="text" placeholder="Ваше имя" value={userName} onChange={(e => setUserName(e.target.value))}/>
            <button className="btn btn-success" onClick={onEnter}>ВОЙТИ</button>
        </div>
    );
}

export default JoinBlock;