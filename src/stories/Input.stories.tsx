import React, {ChangeEvent, useRef, useState} from "react";
import {action} from "@storybook/addon-actions";
import {bool} from "prop-types";
// import {Input} from "./Input";

export default {
    title: 'input',
    // component: input
}

export const UnControlledInput = () => <input/>
export const TrackValueUnControlledInput = () => {
    const [value, setValue] = useState('')
    return <><input onChange={(e) => {
        setValue(e.currentTarget.value)
    }
    }/> - actual value: {value}</>
}
export const GetValueUnControlledInputButtonPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const onSaveHandler = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return <><input ref={inputRef}/>
        <button onClick={onSaveHandler}>save</button>
        - actual value: {value}</>
}
export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <input value={parentValue} onChange={onChangeHandler}/>
}
export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }
    return <input type={'checkbox'} checked={parentValue} onChange={onChangeHandler}/>
}
export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>('2')
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <select value={parentValue} onChange={onChangeHandler}>
        <option>none</option>
        <option value={'1'}>Minsk</option>
        <option value={'2'}>Moscow</option>
        <option value={'3'}>USA</option>
    </select>
}
export const ControlledInputFixedValue = () => <input value={'it-incubator'}/>