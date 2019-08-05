import { Action } from 'redux'

export enum CounterActionTypes {
  INCREMENT = 'INCREMENT',
}

export type CounterAction =
  | Action<CounterActionTypes.INCREMENT>

export const increment: CounterAction = {
  type: CounterActionTypes.INCREMENT,
}
