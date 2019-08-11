import {createAction} from 'typesafe-actions';

export const incrementAction = createAction('test/INCREMENT', action =>
    (age: number) => action(age));

