import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion";
import {Rating} from "./components/Rating";


function App() {

    return (
        <div className={'App'}>
            <AppTitle/>
            <Rating value = {0}/>
            <Rating value = {1}/>
            <Rating value = {2}/>
            <Rating value = {3}/>
            <Rating value = {4}/>
            <Rating value = {5}/>
            <Accordion/>
        </div>
    );
}
function AppTitle () {
    return (
        <h3>This is components App</h3>
    )
}

export default App;
