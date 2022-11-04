import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

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




export default App;
