import React from 'react';
import './App.css';
import {Star} from "./components/Rating/Star";
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";


function App() {

    return (
        <div className={'App'}>
            This is App component
            <Rating/>
            <Accordion/>
        </div>
    );
}

export default App;
