import React from 'react';
import io from 'socket.io-client'

const socket = io('http://localhost:9999')

function App() {
    return (
        <div className="App">
            test
        </div>
    );
}

export default App;
