import React from "react";

type AccordionPropsType = {
    title: string
}
export function Accordion(props: AccordionPropsType) {

    return <div>
        <AccordionTitle title={props.title}/>
        <AccordionBody />

    </div>

    function AccordionTitle(props: any) {
        return (
            <div>
                <h3>{props.title}</h3>
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
}