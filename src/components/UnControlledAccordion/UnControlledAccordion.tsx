import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
}

export function UnControlledAccordion(props: AccordionPropsType) {
    const [collapsed, setCollapsed] = useState(false)
    return <div>

        <AccordionTitle title={props.titleValue}/>
        <button onClick={() => {
            setCollapsed(!collapsed)
        }}>Toggle
        </button>
        {!collapsed && <AccordionBody/>}
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


function AccordionBody() {
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