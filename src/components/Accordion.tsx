import React from "react";

type AccordionType = {
    title: string
    collapsed: boolean
}
export function Accordion (props: AccordionType) {
    if(props.collapsed) {
        return (
            <div>
                <AccordionTitle title={props.title}/>
                <AccordionBody/>
            </div>
        )
    }else {
        return <AccordionTitle title={props.title}/>
    }


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