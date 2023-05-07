import React from "react";


type ItemType = {
    title: string
    value: any
}
type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean
    onChange: ()=> void
    items: ItemType[]
    onClick: (value: any)=>void
}

export function Accordion(props: AccordionPropsType) {

        return <div>
            <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
}

type AccordionTitlePropsType = {
    title: string
    onChange: ()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <div>
            <h2 onClick={props.onChange}>{props.title}</h2>
        </div>
    )
}
type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value:any)=>void
}
function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <div>
            {props.items.map((el, index) => <li onClick={ ()=> {props.onClick(el.value)}} key={index}>{el.title}</li>)}

        </div>
    )
}