import React from "react";
import {action} from '@storybook/addon-actions'
import {UnControlledAccordion} from "./UnControlledAccordion";


export default {
    title: 'UnControlledAccordion stories',
    component: UnControlledAccordion
}
// const callback = () => {action('accordion mode clicked')}

export const ModeChanging = () => {
    return <UnControlledAccordion titleValue={'Users'}  />
}
