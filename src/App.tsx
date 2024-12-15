import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion";
import {Rating} from "./components/Rating";


function App() {

    return (
        <div className={'App'}>
            <PageTitle title = {'This is components App'}/>
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

type PageTitleType = {
    title: string
}
function PageTitle (props: PageTitleType) {
    return (
        <h3>{props.title}</h3>
    )
}

export default App;
