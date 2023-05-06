import React from "react";
import {action} from '@storybook/addon-actions'
import {UnControlledOnOff} from "./UnControlledOnOff";


export default {
    title: 'UnControlledOnOff stories',
    component: UnControlledOnOff
}
const callback = () => {action('accordion mode clicked')}

export const OnMode = () => <UnControlledOnOff defaultOn={true} onChange={callback}/>
export const OffMode = () => <UnControlledOnOff defaultOn={false} onChange={callback}/>
export const DefaultMode = () => <input defaultValue={'yo'} onChange={callback}/>

