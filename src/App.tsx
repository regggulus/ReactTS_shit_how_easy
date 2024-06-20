import React from 'react';
import './App.css';
import {Accordion} from "./components/accordion/Accordion";
import {Rating} from "./components/rating/Rating";
import {TitleMain} from "./components/titleMain/TitleMain";

function App() {

    return (
        <div className={'App'}>
            <TitleMain title={'This is component'}/>
            <Rating/>
            <Accordion/>
        </div>
    );
}

export default App;
