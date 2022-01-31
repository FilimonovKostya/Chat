import React from 'react';
import {io} from 'socket.io-client'



const connectSocket = () => {
    io("http://localhost:8080")
}

function App() {
    return (
        <div className="App">
            Hello React
            <button onClick={connectSocket}>Connect</button>
        </div>
    );
}

export default App;
