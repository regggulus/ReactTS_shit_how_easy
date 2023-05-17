import {reducer, StateType, TOGGLE_COLLAPSED} from "./reducer";

test('reducer should to be true', () => {
    //data
    const state: StateType = {
        collapsed: false
    }
    //action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})
    //expection
    expect(newState.collapsed).toBe(true)
})

test('reducer should to be false', () => {
    //data
    const state: StateType = {
        collapsed: true
    }
    //action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})
    //expection
    expect(newState.collapsed).toBe(false)
})
test('collapsed should to be false', () => {
    //data
    const state: StateType = {
        collapsed: true
    }
    //action

    //expection
    expect(() => {
        reducer(state, {type: 'FAKE-TYPE'})
    }).toThrowError()
})