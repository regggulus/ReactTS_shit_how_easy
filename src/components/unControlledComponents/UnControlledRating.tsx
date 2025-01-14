import React, {useState} from "react";

type RatingType = {
    //
}

export function UnControlledRating() {
    const [meaning, setMeaning] = useState(0)
    return (
        <div>
            <Star selected={meaning > 0}/><button onClick={()=> {setMeaning(meaning
        )}}>add</button>
            <Star selected={meaning > 1}/>
            <Star selected={meaning > 2}/>
            <Star selected={meaning > 3}/>
            <Star selected={meaning > 4}/>

        </div>

    )
}

type SelectedType = {
    selected: boolean
}

function Star(props: SelectedType) {
    if (props.selected === true) {
        return <span><b>star </b></span>
    } else {
        return <span>star </span>
    }

}