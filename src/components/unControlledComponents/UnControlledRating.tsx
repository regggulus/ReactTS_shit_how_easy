import React, {useState} from "react";

type RatingType = {
    //
}
export function UnControlledRating() {
    const [meaning, setMeaning] = useState(0 | 1 | 2 | 3 | 4 | 5)
        return (
            <div>
                <Star selected={value > 0}/>
                <Star selected={value > 1 }/>
                <Star selected={value > 2}/>
                <Star selected={value > 3}/>
                <Star selected={value > 4}/>
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