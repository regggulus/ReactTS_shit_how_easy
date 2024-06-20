import React from 'react';
import './App.css';
import {Accordion} from "./components/accordion/Accordion";
import {Rating} from "./components/rating/Rating";
import {PageTitle} from "./components/titleMain/PageTitle";

function App() {

    return (
        <div className={'App'}>
            <PageTitle title={'This is component'}/>
            <Rating/>
            <Accordion title={'Menu'} collapsed={true}/>
            <Accordion title={'Users'} collapsed={false}/>
        </div>
    );
}

export default App;
