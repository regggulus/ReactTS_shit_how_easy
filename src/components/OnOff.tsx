import React from "react";

export type OnOffType = {
    title: string
    switchings: boolean
}
export function OnOff({title, switchings}:OnOffType) {
    const indicatorStyle: React.CSSProperties = {
        border: '2px solid black',
        width: '15px',
        height: '15px',
        borderRadius: '15px',
        backgroundColor: 'gray',
    };
    const buttonStyle: React.CSSProperties = {
        display: 'inline-block',
        padding: '10px 20px',
        margin: '5px',
        border: '2px solid black',
        borderRadius: '5px',
        color: 'white',
        backgroundColor: 'gray',
        cursor: 'pointer',
        textAlign: 'center',
        userSelect: 'none', // Запретить выделение текста
    };
    return (
        <div>
            <div style={{ ...buttonStyle, backgroundColor: 'greenyellow'}}>{title}</div>
            <div style={{ ...indicatorStyle, backgroundColor: 'greenyellow' && 'coral'}}></div>
           <div style={{ ...buttonStyle, backgroundColor: 'coral'}}>{title}</div>

        </div>
    );
}
