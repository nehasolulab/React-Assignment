import React from "react";
import "./StateChangeRedux.css"
import { useSelector , useDispatch } from "react-redux";
import {incNumber , decNumber} from "./actions/index";

const StateChangeRedux = () => {

    const initNum = useSelector((state)=>state.StateChange);
    const dispatch = useDispatch();
    const incNumberDispatch = () => {
        dispatch(incNumber(5))
    }
    const decNumberDispatch = () => {
        dispatch(decNumber(5))
    }
    
    return(
        <>
            <div className="wrapper">
                {initNum.errorMsg.length>0 && <h1>{initNum.errorMsg}</h1>}
                <div className="StateChangeReduxHeading mb-5">
                    <h1>Increment/Decrement Counter</h1>
                    <h4>using React and Redux</h4>
                </div>

                <h1 className="number mt-3">{initNum.value}</h1>
                <div className="d-flex align-items-center mt-4">
                    <button className="me-5" onClick={incNumberDispatch}>+</button>
                    <button onClick={decNumberDispatch}>-</button>
                </div>
            </div>
        </>
    )
}

export default StateChangeRedux;