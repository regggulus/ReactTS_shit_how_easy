import React from "react";

type AccordionType = {
    title: string
    collapsed: boolean
}

export function Accordion({title, collapsed}: AccordionType) {
    return (

        <div>
            {collapsed
                ?
                <div>
                    <AccordionTitle title={title}/>
                    <AccordionBody/>
                </div>
                :
                <AccordionTitle title={title}/>
            }
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