import React from 'react';

export function OnOffButton() {
    return (
        <div>
            <div style={{width: '50px', height: '35px',border: '2px solid black', borderRadius: '10px', fontSize: '20px', textAlign: 'center', margin: '10px'}}>On</div>
            <div style={{width: '50px', height: '35px',border: '2px solid black', borderRadius: '10px', fontSize: '20px', textAlign: 'center', margin: '10px'}}>Off</div>
            <div style={{width: '30px', height: '30px',border: '2px solid black', borderRadius: '50px', fontSize: '20px', textAlign: 'center', margin: '10px'}}></div>
        </div>
    );
};

