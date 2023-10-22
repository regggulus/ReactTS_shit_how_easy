import React from "react";


export function Accordion() {

        return <div>
           <AccordionTitle/>

         <ul>
             <li>1</li>
             <li>2</li>
             <li>3</li>
         </ul>
        </div>

    function AccordionTitle() {
        return (
            <div>
                <h3>Menu</h3>
            </div>
        )
    }
}