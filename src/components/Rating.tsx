import React from "react";

type RatingType = {
    value: number
}
export function Rating(props: RatingType) {
    if(props.value === 1) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected ={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>

        )
    }
    if(props.value === 2) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected ={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>

        )
    }
    if(props.value === 3) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected ={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>

        )
    }
    if(props.value === 4) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected ={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
            </div>

        )
    }
    if(props.value === 5) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected ={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
            </div>
        )
    }
    return (
        <div>
            <Star selected={false}/>
            <Star selected ={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
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