import React, {useReducer} from 'react';
import JoinBlock from "./components/JoinBlock";
import reducer from "./reducer";


function App() {
    const [state, dispatch] = useReducer(reducer, {
        isAuth: false
    });


    return (
        <div className="wrapper">
            <JoinBlock/>
        </div>
    );
}

export default App;
