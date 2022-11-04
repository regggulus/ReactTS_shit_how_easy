import React from 'react';
import './App.css';

//function declaration
function App() {
    return (
        <div>
            This is App component
            <Rating/>
        </div>
    );
}

function Rating() {
    return <div>
        <div>star</div>
        <div>star</div>
        <div>star</div>
        <div>star</div>
        <div>star</div>
    </div>
}

function Accordion() {
    return (
        <div>
            <h1>Menu</h1>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}

export default App;
