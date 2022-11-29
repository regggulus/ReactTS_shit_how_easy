import React, {useState} from 'react';

type UnControlledOnOffType = {
    on: boolean
    onChange: (value: boolean)=> void

}
export function UnControlledOnOff (props: UnControlledOnOffType) {
    const onOff = {
        display: 'flex',
        alignItems: 'center',
        width: '200px',
        height: '75px',
        border: props.on ? '5px solid hotpink' : '5px solid deepskyblue',
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
        background: props.on ? 'hotpink' : "white"
    }
    const offStyle = {
        width: '50px',
        height: '35px',
        border: '3px solid black',
        borderRadius: '10px',
        fontSize: '20px',
        margin: '10px',
        background: props.on ? 'white' : 'deepskyblue'
    }
    const indicatorStyle = {
        width: '30px',
        height: '30px',
        borderRadius: '50px',
        border: '3px solid black',
        margin: '10px',
        background: props.on ? 'hotpink' : 'deepskyblue'
    }
    const onClicked = () =>  {props.onChange(true)}
    const offClicked =  () => {props.onChange(false)}

        return (
            <div style={onOff}>
                <div style={onStyle} onClick={onClicked}>On</div>
                <div style={offStyle} onClick={offClicked}>Off</div>
                <div style={indicatorStyle}></div>

            </div>
        )


};
