import React from 'react';
import './App.css';

//function declaration
function App() {
    return (
        <div>
            <AppTitle/>
            <Rating/>
            <Accordion/>
        </div>
    );
}

function AppTitle() {
    return (
        <div>
            <h2>This is App component</h2>
        </div>
    )
}

function Rating() {
    return <div>
        <Star/>
        <Star/>
        <Star/>
        <Star/>
        <Star/>
    </div>
}

function Accordion() {
    return (
        <div>
<AccordionTitle/>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}

function AccordionTitle() {
    return (
        <div>
            <h2>Menu</h2>
        </div>
    )
}

function Star() {
    return (
        <div>star</div>
    )
}

export default App;
