import React, {useState} from "react";

export type OnOffType = {
    switchings: boolean
}

export function OnOff({switchings}: OnOffType) {
    const indicatorStyle: React.CSSProperties = {
        border: '2px solid black',
        width: '15px',
        height: '15px',
        borderRadius: '15px',
        backgroundColor: switchings ? 'greenyellow' : "coral",
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
        backgroundColor: switchings ? 'greenyellow' : 'gray',
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
        backgroundColor: switchings ? 'gray' : 'coral',
        cursor: 'pointer',
        textAlign: 'center',
        userSelect: 'none', // Запретить выделение текста
    };
    const [on, setOn] = useState(true)
        return (
            <div>
             <div style={onStyle}>on</div>
             <div style={offStyle}>off</div>
             <div style={indicatorStyle}>i</div>
            </div>
        )
}