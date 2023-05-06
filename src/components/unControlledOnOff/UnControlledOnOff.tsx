import React, {useState} from 'react';
import './UnControlledOnOff.css'

type UnControlledOnOffType = {
    // on: boolean
    onChange: (on: boolean) => void
    defaultOn?: boolean

}

export function UnControlledOnOff(props: UnControlledOnOffType) {
    let [on, setOn] = useState<boolean>(props.defaultOn ? props.defaultOn : false)
    const onOff = {
        display: 'flex',
        alignItems: 'center',
        width: '200px',
        height: '75px',
        border: on ? '5px solid greenyellow' : '5px solid deepskyblue',
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
        background: on ? 'greenyellow' : "white"
    }
    const offStyle = {
        width: '50px',
        height: '35px',
        border: '3px solid black',
        borderRadius: '10px',
        fontSize: '20px',
        margin: '10px',
        background: on ? 'white' : 'deepskyblue'
    }
    const indicatorStyle = {
        width: '30px',
        height: '30px',
        borderRadius: '50px',
        border: '3px solid black',
        margin: '10px',
        background: on ? 'greenyellow' : 'deepskyblue'
    }
    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }
    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }

    return (
            <div style={onOff}>
                <div style={onStyle} onClick={onClicked}>On</div>
                <div style={offStyle} onClick={offClicked}>Off</div>
                <div style={indicatorStyle}></div>
        </div>

    )


};
