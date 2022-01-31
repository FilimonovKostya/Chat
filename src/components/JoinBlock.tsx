import React, {useEffect} from 'react';
import {io} from "socket.io-client";

const JoinBlock = () => {

    useEffect(() => {

       const socket = io()
    }, [])

    return (
        <div className="join-block">
            <input type="text" placeholder="Room ID"/>
            <input type="text" placeholder="Ваше имя"/>
            <button className="btn btn-success">ВОЙТИ</button>
        </div>
    );
}

export default JoinBlock;