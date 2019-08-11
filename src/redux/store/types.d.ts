import {ActionType, StateType} from 'typesafe-actions';
import action from './root-action';
import state from './root-reducer';
import store from '../store';

declare module 'typesafe-actions' {

    export type Store = StateType<typeof store>;

    export type RootState = StateType<typeof state>;

    export type RootAction = ActionType<typeof action>;

    interface Types {
        RootAction: RootAction;
    }
}
