import React, {useState} from "react";

export type OnOffType = {
    // switchings: boolean
}

export function OnOff() {
    const [on, setOn] = useState(false)

    const indicatorStyle: React.CSSProperties = {
        display: 'inline-block',
        border: '2px solid black',
        width: '15px',
        height: '15px',
        borderRadius: '15px',
        backgroundColor: on ? 'greenyellow' : "coral",
        textAlign: 'center',
        color: "white"
    }
    const onStyle: React.CSSProperties = {
        display: 'inline-block',
        padding: '10px 20px',
        margin: '5px',
        border: '2px solid black',
        borderRadius: '5px',
        color: 'white',
        backgroundColor: on ? 'greenyellow' : 'gray',
        cursor: 'pointer',
        textAlign: 'center',
        userSelect: 'none', // Запретить выделение текста
    }
    const offStyle: React.CSSProperties = {
        display: 'inline-block',
        padding: '10px 20px',
        margin: '5px',
        border: '2px solid black',
        borderRadius: '5px',
        color: 'white',
        backgroundColor: on ? 'gray' : 'coral',
        cursor: 'pointer',
        textAlign: 'center',
        userSelect: 'none', // Запретить выделение текста
    };

        return (
            <div>
             <div style={onStyle} onClick={ () => {setOn(true)}}>on</div>
             <div style={offStyle} onClick={ () => {setOn(false)}}>off</div>
             <div style={indicatorStyle}>i</div>
            </div>
        )
}