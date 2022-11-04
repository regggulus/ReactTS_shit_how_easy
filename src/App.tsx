import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";

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

function Star() {
    return (
        <div>star</div>
    )
}




export default App;
