import React, {useState} from "react";

type OnOffType = {

}
export function OnOff(props: OnOffType) {
    const [on, setOn] = useState(true)
    const onClickOnHandler = () => {
        setOn(true)
    }
    const onClickOffHandler = () => {
        setOn(false)
    }
    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? 'greenyellow' : 'white',
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? 'white' : 'coral'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        border: '1px solid black',
        borderRadius: '5px',
        display: 'inline-block',
        margin: '5px',
        backgroundColor: on ? 'greenyellow' : 'coral'
    }
    return(
        <div>
          <div onClick={onClickOnHandler} style={onStyle}>on</div>
          <div onClick={onClickOffHandler} style={offStyle}>off</div>
          <div style={indicatorStyle}></div>
        </div>
    )
}