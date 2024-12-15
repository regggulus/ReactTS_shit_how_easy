import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion";


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
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>

    )
}

function Star () {
    return (
        <div>star</div>
    )
}

export default App;
