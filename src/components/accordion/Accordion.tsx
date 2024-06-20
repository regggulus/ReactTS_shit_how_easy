import React from "react";

export function Accordion() {
    return (
        <div>
            <AccordionTitle title={'Menu'}/>
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