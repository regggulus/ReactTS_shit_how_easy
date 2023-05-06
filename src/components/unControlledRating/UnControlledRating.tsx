import React, {useState} from "react";
import {SetRatingPropsType} from "../Rating/Rating";

type RatingProsType = {
    // value: 0 | 1 | 2 | 3 | 4 | 5
    defaultValue?: SetRatingPropsType
    onChange: (value: SetRatingPropsType)=> void
}

export function UnControlledRating(props: RatingProsType) {

    const [value, setValue] = useState<SetRatingPropsType>(props.defaultValue ? props.defaultValue : 0)
    return (
        <div>
            <Star selected={value > 0} setValue={ () => {setValue(1);
                props.onChange(1)}}/>
            <Star selected={value > 1} setValue={ () => {setValue(2);
            props.onChange(2)}}/>
            <Star selected={value > 2} setValue={ () => {setValue(3);
            props.onChange(3)}}/>
            <Star selected={value > 3} setValue={ () => {setValue(4);
            props.onChange(4)}}/>
            <Star selected={value > 4} setValue={ () => {setValue(5);
            props.onChange(5)}}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    setValue: () => void
}

function Star(props: StarPropsType) {
    const onClickStar =  () => {props.setValue()}
    return <span onClick={onClickStar}>{props.selected ? <b style={{color: 'cornflowerblue'}}>star </b> : 'star'}</span>

}