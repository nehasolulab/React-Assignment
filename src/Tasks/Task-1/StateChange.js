import React, { useState } from "react";
import "./StateChange.css";

const StateChange = () => {

    const [num , setNum] = useState(0);

    const Increment = () => {
        setNum(num+1);
    }

    const Decrement = () => {
        if (num > 0){
            setNum(num-1);
        }
        else{
            alert("Number smaller than 0 is not allow");
            setNum(0);
        }
        
    }

    return(
        <div className="state-change-container wrapper">
            <div className="sub-container">
                <h1>{num}</h1>
                <div className="btn-container">
                    <button className="me-3" onClick={Increment}>+</button>
                    <button onClick={Decrement}>-</button>
                </div>
            </div>
        </div>
    )
}

export default StateChange;