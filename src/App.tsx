import React from 'react';
import './App.css';

function App() {

    return (
        <div className={'App'}>
            <h2>This is component</h2>
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
            <AccordionTitle title={'Menu'}/>
            <AccordionBody/>
            <AccordionTitle title={'Users'}/>
            <AccordionBody/>

        </div>
    )
}
type AccordionTitleType = {
    title: string
}
function AccordionTitle({title}: AccordionTitleType) {
    return (
            <h3>{title}</h3>
    )
}
function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
export default App;
