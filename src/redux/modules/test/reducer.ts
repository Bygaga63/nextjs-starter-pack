import { CounterActionTypes } from "./actions";
import { ITestState } from "./interfaces";
import { Action } from "redux";

const initialState: ITestState = {
  age: 0
};

export default function(
  state: ITestState = initialState,
  action: Action<string>
) {
  switch (action.type) {
    case CounterActionTypes.INCREMENT:
      return {
        ...state,
        age: state.age + 1
      };
    default:
      return state;
  }
}
