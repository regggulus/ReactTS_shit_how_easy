import React from "react";
import {setProjectAnnotations} from "@storybook/react";
export type RatingType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}
export function Rating({value}: RatingType) {
    return (
        <div>
            <Star selected={value > 0}/>
            <Star selected={value > 1}/>
            <Star selected={value > 2}/>
            <Star selected={value > 3}/>
            <Star selected={value > 4}/>

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