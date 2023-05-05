import React, {useState} from "react";
import {OnOffButton} from "./OnOffButton";


export default {
    title: 'OnOff stories',
    component: OnOffButton
}

export const EmptyOnOff = () => <OnOffButton onClick={() => {}} on={true}/>
export const OnOff1 = () => <OnOffButton onClick={x=>x} on={false}/>
export const OnOff2 = () => <OnOffButton onClick={x=>x} on={true}/>
export const OnOffChanging = () => {
    const [onOff, setOnOff] = useState(false)
    return <OnOffButton on={onOff} onClick={setOnOff}/>
}
