import React, {useState} from "react";

type AccordionType = {
    title: string
    // collapsed: boolean
}
export function UnControlledAccordion (props: AccordionType) {
const [collapsed, setCollapsed] = useState(true)
        return (
            <div>
                <AccordionTitle title={props.title}/>
                {!collapsed && <AccordionBody/>}
                <button onClick={()=> {setCollapsed(true)}}>Toggle</button>
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