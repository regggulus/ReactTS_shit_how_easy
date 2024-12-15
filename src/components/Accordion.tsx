import React from "react";

type AccordionType = {
    title: string
}
export function Accordion (props: AccordionType) {
    return (
        <div>
            <AccordionTitle title={props.title}/>
            <AccordionBody/>
        </div>
    )
}

type AccordionTitleType = {
    title: string
}
function AccordionTitle (props: AccordionTitleType) {
    return (
        <h3>{props.title}</h3>
    )
}
function AccordionBody () {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}