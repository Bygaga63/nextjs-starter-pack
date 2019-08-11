import { combineReducers } from "redux";
import * as reducers from '../modules';
import {IState} from "../types";
const combinedReducers = combineReducers<IState>({
    ...reducers
});

export default combinedReducers;
