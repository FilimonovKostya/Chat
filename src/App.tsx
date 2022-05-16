import React from 'react';
import SignIn from "./components/SignIn";
import './index.scss'

function App() {
    return (
        <div className={'wrapper'}>
            <div className={'container'}>
                <SignIn/>
            </div>
        </div>
    );
}

export default App;
