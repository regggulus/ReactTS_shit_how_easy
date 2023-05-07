import React, {useState} from "react";
import {action} from '@storybook/addon-actions'
import {Accordion} from "./Accordion";


export default {
    title: 'Accordion stories',
    component: Accordion
}
const callback = () => {
    action('accordion mode clicked')
}
const onClickCallback = () => {
    action('some item was clicked')
}
export const MenuCollapsedMode = () => <Accordion collapsed={true} titleValue={'Menu'} onChange={callback} items={[]}
                                                  onClick={onClickCallback}/>
export const UsersUnCollapsedMode = () =>
    <Accordion
        collapsed={false}
        titleValue={'Users'}
        onClick={onClickCallback}
        onChange={callback}
        items={
            [
                {title: "William", value: 1},
                {title: "Michael", value: 2},
                {title: "Lewis", value: 3}
            ]}/>
export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion
        collapsed={value}
        onClick={onClickCallback}
        onChange={() => setValue(!value)}
        titleValue={'Users'}
        items={
            [
                {title: "William", value: 1},
                {title: "Michael", value: 2},
                {title: "Lewis", value: 3}
            ]}/>
}
