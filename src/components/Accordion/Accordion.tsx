import React from "react";

type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean
}

export function Accordion(props: AccordionPropsType) {

        return <div>
            <AccordionTitle title={props.titleValue}/>
            {!props.collapsed === <AccordionBody collapsed={props.collapsed}/>}
        </div>
}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <div>
            <h2>{props.title}</h2>
        </div>
    )
}

type AccordionBodyPropsType = {
    collapsed: boolean
}

function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}