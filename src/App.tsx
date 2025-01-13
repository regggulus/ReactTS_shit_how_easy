import React from 'react';
import './App.css';
import {Accordion} from "./components/controlledComponents/Accordion";
import {Rating} from "./components/controlledComponents/Rating";
import {PageTitle} from "./components/controlledComponents/PageTitle";
import {OnOff} from "./components/OnOff";


function App() {

    return (
        <div className={'App'}>
           {/* <PageTitle title = {'This is controlled components App'}/>
            <Rating value = {0}/>
            <Rating value = {1}/>
            <Rating value = {2}/>
            <Rating value = {3}/>
            <Rating value = {4}/>
            <Rating value = {5}/>
            <Accordion title = {'Users'} collapsed = {true}/>
            <Accordion title = {'Menu'} collapsed = {false}/>*/}
            <PageTitle title={'This is Un Controlled components App'}/>
            <OnOff/>
        </div>
    );
}

export default App;
