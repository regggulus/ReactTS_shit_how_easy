import React, {useState} from "react";

type RatingType = {
    /*value: 0 | 1 | 2 | 3 | 4 | 5*/
}

export function UnControlledRating(props: RatingType) {
    const [value, setValue] = useState(0 | 1 | 2 | 3 | 4 | 5 )
    const value1Handler = () => {
        setValue(1)
    }
    const value2Handler = () => {
        setValue(2)
    }
    const value3Handler = () => {
        setValue(3)
    }
    const value4Handler = () => {
        setValue(4)
    }
    const value5Handler = () => {
        setValue(5)
    }
    return (
        <div>
            <Star selected={value > 0}/>
            <button onClick={value1Handler}>1</button>
            <Star selected={value > 1}/>
            <button onClick={value2Handler}>2</button>
            <Star selected={value > 2}/>
            <button onClick={value3Handler}>3</button>
            <Star selected={value > 3}/>
            <button onClick={value4Handler}>4</button>
            <Star selected={value > 4}/>
            <button onClick={value5Handler}>5</button>


        </div>
    )

}

type StarType = {
    selected: boolean
}

function Star(props: StarType) {

    return (
        <>
            {props.selected ? <span><b>star </b></span> : <span>star </span>}
        </>
    )
}