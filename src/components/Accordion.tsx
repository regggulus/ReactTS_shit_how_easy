import React from "react";

export function Accordion () {
    return (
        <div>
            <AccordionTitle/>
            <AccordionBody/>
        </div>
    )
}
function AccordionTitle () {
    return (
        <h3>Users</h3>
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