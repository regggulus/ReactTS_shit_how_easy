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
    const [on, setOn] = useState(true)
    return (
        <div>
            <div style={{...buttonStyle, backgroundColor: 'greenyellow'}}>
                {!switchings && on}
                on
            </div>
            <div style={{...indicatorStyle, backgroundColor: 'greenyellow' && 'coral'}}></div>
            <div style={{...buttonStyle, backgroundColor: 'coral'}}>off</div>

        </div>
    );
}
