import React, {FC, useState} from 'react';
import axios from "axios";

const JoinBlock: FC<{ onLogin: (object: Object) => void }> = ({onLogin}) => {

    const [roomId, setRoomId] = useState('');
    const [userName, setUserName] = useState('');
    const [isLoading, setIsLoading] = useState(false);


    const onEnter = async () => {
        if (!roomId || !userName) {
            return alert('Incorrect data')
        }
        console.log(roomId, userName)

        const obj = {
            roomId,
            userName
        }

        setIsLoading(true)
        await axios.post('/rooms', {
            roomId,
            userName
        })

        onLogin(obj)
    }

    return (
        <div className="join-block">
            <input type="text" placeholder="Room ID" value={roomId} onChange={(e => setRoomId(e.target.value))}/>
            <input type="text" placeholder="Ваше имя" value={userName} onChange={(e => setUserName(e.target.value))}/>
            <button disabled={isLoading} className="btn btn-success" onClick={onEnter}>ВОЙТИ</button>
            {isLoading ? 'Вход...' : 'Войти'}
        </div>
    );
}

export default JoinBlock;