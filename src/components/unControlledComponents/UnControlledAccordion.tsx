import React, {useState} from "react";

type AccordionType = {
    title: string
    // collapsed: boolean
}
export function UnControlledAccordion (props: AccordionType) {
const [collapsed, setCollapsed] = useState(false)
        return (
            <div>
                <AccordionTitle title={props.title}/>
                {/*{!props.collapsed && <AccordionBody/>}*/}
            </div>
        )
}

type AccordionTitleType = {
    title: string
}
function AccordionTitle (props: AccordionTitleType) {
    return (
        <div>
            <h3>{props.title}</h3>
            <button onClick={() => {}}>Toggle</button>
        </div>


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