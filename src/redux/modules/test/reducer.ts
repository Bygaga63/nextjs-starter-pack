import {ITestState} from "./types";
import {createReducer} from "typesafe-actions";
import {incrementAction} from "./actions";
const initialState: ITestState = {
  age: 1
};

const test = createReducer(initialState)
        .handleAction(incrementAction, (state, action) => ({...state, age: action.payload}))

export default test;
