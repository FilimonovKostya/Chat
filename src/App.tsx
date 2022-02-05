import React, {useReducer} from 'react';
import JoinBlock from "./components/JoinBlock";
import reducer from "./reducer";
import socket from './socket'

function App() {
    const [state, dispatch] = useReducer(reducer, {joined: false, roomId: null, userName: null});

    console.log('State', state)

    const onLogin = (object: Object) => {
        dispatch({type: 'JOINED', payload: object})

        socket.emit('ROOM:JOIN', object)
    }

    return (
        <div className="wrapper">
            {!state.joined && <JoinBlock onLogin={onLogin}/>}
        </div>
    );
}

export default App;
