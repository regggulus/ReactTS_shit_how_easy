import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

//function declaration
function App() {
    return (
        <div>
            <AppTitle/>
            <Accordion/>
            <Rating value = {0}/>
            <Rating value = {1}/>
            <Rating value = {2}/>
            <Rating value = {3}/>
            <Rating value = {4}/>
            <Rating value = {5}/>
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
