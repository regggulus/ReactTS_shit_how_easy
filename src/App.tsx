import React from 'react';
import './App.css';

function App() {

    return (
        <div className={'App'}>
            This is component
            <Rating/>
            <Accordion/>
        </div>
    );
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
function Star() {
    return (
        <div>star</div>
    )
}

function Accordion() {
    return (
        <div>

            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}
type AccordionTitleType = {
    title: string
}
function AccordionTitle({title}: AccordionTitleType) {
    return (
        <div>
            <h3>{title}</h3>
        </div>
    )
}
export default App;
