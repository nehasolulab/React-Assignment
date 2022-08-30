import React from "react";
import "./StateChangeRedux.css"
import { useSelector , useDispatch } from "react-redux";
import {incNumber , decNumber} from "./actions/index";

const StateChangeRedux = () => {

    const initNum = useSelector((state)=>state.StateChange);
    const dispatch = useDispatch();
    return(
        <>
            <div className="wrapper">
                <div className="StateChangeReduxHeading mb-5">
                    <h1>Increment/Decrement Counter</h1>
                    <h4>using React and Redux</h4>
                </div>

                <h1 className="number mt-3">{initNum}</h1>
                <div className="d-flex align-items-center mt-4">
                    <button className="me-5" onClick={()=>dispatch(incNumber(5))}>+</button>
                    <button onClick={()=>dispatch(decNumber(5))}>-</button>
                </div>
            </div>
        </>
    )
}

export default StateChangeRedux;