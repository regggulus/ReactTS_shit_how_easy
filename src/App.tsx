import React from 'react';
import './App.css';


function App() {

    return (
        <div className={'App'}>
            <AppTitle/>
            <Rating/>
            <Accordion/>
        </div>
    );
}
function AppTitle () {
    return (
        <h3>This is components App</h3>
    )
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
            <AccordionTitle/>
            <AccordionBody/>
        </div>
    )
}
function AccordionTitle () {
    return (
        <h3>Users</h3>
    )
}
function AccordionBody () {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
function Star () {
    return (
        <div>star</div>
    )
}

export default App;
