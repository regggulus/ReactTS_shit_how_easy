import React from 'react';
import './App.css';


function App() {

    return (
        <div className={'App'}>
            <h3>This is components App</h3>
            <Rating/>
            <Accordion/>
        </div>
    );
}

function Rating() {
    return (
        <div>
            <Star/>
        </div>

    )
}
function Accordion () {
    return (
        <div>
            <h3>Users</h3>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}
function Star () {
    return (
        <div>star</div>
    )
}

export default App;
