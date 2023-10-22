import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";


function App() {

    return (
        <div className={'App'}>

            <Rating/>
            <Accordion/>
        </div>
    );
}

function AppTitle() {
    return (
        <div>This is App component</div>
    )
}

export default App;
