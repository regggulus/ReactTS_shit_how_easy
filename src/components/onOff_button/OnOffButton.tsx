import React, {useState} from 'react';
import './OnOffButton.css'

type OnOffButtonType = {
    on: boolean
    onClick: (value: boolean) => void
}
export function OnOffButton(props: OnOffButtonType) {
    // let [on, setOn] = useState(false)

    const onOff = {
        display: 'flex',
        alignItems: 'center',
        width: '200px',
        height: '75px',
        border: props.on ? '5px solid greenyellow' : '5px solid coral',
        borderRadius: '10px',
        margin: '10px'
    }
    const onStyle = {
        width: '50px',
        height: '35px',
        border: '3px solid black',
        borderRadius: '10px',
        fontSize: '20px',
        margin: '10px',
        background: props.on ? 'greenyellow' : "white"
    }
    const offStyle = {
        width: '50px',
        height: '35px',
        border: '3px solid black',
        borderRadius: '10px',
        fontSize: '20px',
        margin: '10px',
        background: props.on ? 'white' : 'coral'
    }
    const indicatorStyle = {
        width: '30px',
        height: '30px',
        borderRadius: '50px',
        border: '3px solid black',
        margin: '10px',
        background: props.on ? 'greenyellow' : 'coral'
    }

        return (
            <div style={onOff}>
                <div style={onStyle} onClick={ () => {props.onClick(true)}}>On</div>
                <div style={offStyle} onClick={ () => {props.onClick(false)}}>Off</div>
                <div style={indicatorStyle}></div>
            </div>

        )


};
