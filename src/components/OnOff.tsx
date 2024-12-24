import React from "react";

export type OnOffType = {
    switchings: boolean
}
export function OnOff({switchings}:OnOffType) {
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
            <div style={{ ...buttonStyle, backgroundColor: 'greenyellow'}}>On</div><div style={{ ...indicatorStyle, backgroundColor: 'greenyellow' && 'coral'}}></div>
            {!switchings && <div style={{ ...buttonStyle, backgroundColor: 'coral'}}>Off</div>}

        </div>
    );
};

type OnType = {
    title: string
}
function On({title}: OnType) {
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
        <div
            style={{ ...buttonStyle, backgroundColor: 'greenyellow' }}
        >{title}</div>
    )
}
type OffType = {
    title: string
}
function Off({title}:   OffType) {
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
        <div
            style={{ ...buttonStyle, backgroundColor: 'coral' }}
        >{title}</div>
    )
}