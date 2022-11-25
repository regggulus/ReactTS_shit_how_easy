import React from 'react';
import './OnOffButton.css'




export function OnOffButton() {
    const click = false
    const onOff = {
        display: 'flex',
        alignItems: 'center',
        width: '200px',
        height: '75px',
        border: click ? '5px solid greenyellow' : '5px solid coral',
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
        background: click ? 'greenyellow' : "white"
    }
    const offStyle = {
        width: '50px',
        height: '35px',
        border: '3px solid black',
        borderRadius: '10px',
        fontSize: '20px',
        margin: '10px',
        background: click ? 'white' : 'coral'
    }
    const indicatorStyle = {
        width: '30px',
        height: '30px',
        borderRadius: '50px',
        border: '3px solid black',
        margin: '10px',
        background: click ? 'greenyellow' : 'coral'
    }
        return (
            <div style={onOff}>
                <div style={onStyle}>On</div>
                <div style={offStyle}>Off</div>
                <div style={indicatorStyle}></div>

            </div>
        )


};
