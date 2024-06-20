import React from "react";
import {setProjectAnnotations} from "@storybook/react";

export function Rating() {
    return (
        <div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </div>
    )
}

type StarType = {
    selected: boolean
}

function Star({selected}: StarType) {

    return (

        <span>{selected}<b>star </b></span>
    )
}