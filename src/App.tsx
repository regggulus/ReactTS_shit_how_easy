import React from 'react';
import './App.css';
import {Accordion} from "./components/accordion/Accordion";
import {Rating} from "./components/rating/Rating";
import {PageTitle} from "./components/titleMain/PageTitle";
import {OnOff} from "./onOff/OnOff";

function App() {

    return (
        <div className={'App'}>
            <PageTitle title={'This is component'}/>
            <Rating value = {0}/>
            <Rating value = {1}/>
            <Rating value = {2}/>
            <Rating value = {3}/>
            <Rating value = {4}/>
            <Rating value = {5}/>
            <Accordion title={'Menu'} collapsed={true}/>
            <Accordion title={'Users'} collapsed={false}/>
            <OnOff onOff={true}/>
        </div>
    );
}

export default App;
