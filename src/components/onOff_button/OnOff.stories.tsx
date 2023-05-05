import React, {useState} from "react";
import {OnOffButton} from "./OnOffButton";
import {action} from '@storybook/addon-actions'


export default {
    title: 'OnOff stories',
    component: OnOffButton
}
const callback = () => {action('on or off clicked')}
export const OnMode = () => <OnOffButton onClick={callback} on={true}/>
export const OffMode = () => <OnOffButton onClick={callback} on={false}/>
export const OnOffChanging = () => {
    const [value, setValue] = useState<boolean>(false)
    return <OnOffButton on={value} onClick={setValue}/>
}
