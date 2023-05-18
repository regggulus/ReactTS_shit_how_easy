import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./reducer";

type AccordionPropsType = {
    titleValue: string
}

export function UnControlledAccordion(props: AccordionPropsType) {
    const [collapsed, dispatch] = useReducer(reducer, {collapsed: false})
    return <div>

        <AccordionTitle title={props.titleValue} onClick= { () => {dispatch({type: TOGGLE_COLLAPSED})}}/>
        {!collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <div>
            <h2 onClick={ () => {props.onClick()}}>{props.title} </h2>
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