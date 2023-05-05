import React, {useState} from "react";
import {action} from '@storybook/addon-actions'
import {Accordion} from "./Accordion";


export default {
    title: 'Accordion stories',
    component: Accordion
}
const callback = () => {action('accordion mode clicked')}
export const CollapsedMode = () => <Accordion collapsed={true} titleValue={'Menu'} onChange={callback} />
export const UnCollapsedMode = () => <Accordion collapsed={false} titleValue={'Users'} onChange={callback} />
export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion collapsed={value} onChange={() => setValue(!value)} titleValue={'Users'}/>
}
