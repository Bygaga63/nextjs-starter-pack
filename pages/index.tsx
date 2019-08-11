import {useDispatch, useSelector} from "react-redux";
import React from 'react';
import {ITestState} from "../src/redux/modules/test/types";
import {IState} from "../src/redux/types";
import Button from "@material-ui/core/Button/Button";
import {incrementAction} from "../src/redux/modules/test/actions";

const Home = () => {
    const test: ITestState = useSelector(({test}: IState) => test);
    const dispatch = useDispatch();
    return <div>
        <h1>{test.age}</h1>
        <Button  variant="contained"  color={'primary'} onClick={() => {

            dispatch(incrementAction(test.age));
        }}>Material UI button</Button>
    </div>
};

export default Home;
