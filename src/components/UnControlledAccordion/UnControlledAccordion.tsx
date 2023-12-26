import React, {useState} from "react";

type AccordionPropsType = {
    title: string
}

export function UnControlledAccordion(props: AccordionPropsType) {
    const [collapsed, setCollapsed] = useState(true)
    const collapsedHandler = () => {
        setCollapsed(!collapsed)
    }
    return (
        <div>
         <AccordionTitle title={props.title}/>
            <button onClick={collapsedHandler}>Toggle</button>
            {!collapsed && <AccordionBody />}
        </div>
    )

}
type AccordionTitleType = {
    title: string
}
function AccordionTitle(props: AccordionPropsType) {
    return (
        <div>
            <h3 >{props.title}</h3>
        </div>
    )
}

function AccordionBody() {
    return (
        <div>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </div>
    )
}