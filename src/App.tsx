import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion";
import {Rating} from "./components/Rating";


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

export default App;
