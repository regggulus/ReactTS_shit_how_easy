import React, {useRef, useState} from "react";
// import {Input} from "./Input";

export default {
  title: 'input',
  // component: input
}

export const UnControlledInput = () => <input />
export const TrackValueUnControlledInput = () => {
  const [ value, setValue] = useState('')
  return <><input onChange={(e) => {
  setValue(e.currentTarget.value)}
  }/> - actual value: {value}</>
}
export const GetValueUnControlledInputButtonPress = () => {
  const [ value, setValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const onSaveHandler = () => {
    const el = inputRef.current as HTMLInputElement
    setValue(el.value)
  }
  return <><input ref={inputRef} /> <button onClick={onSaveHandler} >save</button> - actual value: {value}</>
}
export const ControlledInput = () => <input value={'it-incubator'} />