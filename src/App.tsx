import React from 'react';
import './App.css';


function App() {

    return (
        <div className={'App'}>
            <div>This is components App</div>
            <Rating/>
        </div>
    );
}

function Rating() {
    return (
        <div>
            <div>star</div>
            <div>star</div>
            <div>star</div>
            <div>star</div>
            <div>star</div>
        </div>

    )
}

export default App;
