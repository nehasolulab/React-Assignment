const initialState =0;

const StateChange = (state=initialState , action) => {
    switch (action.type){
        case "INCREMENT":
            return state + action.payload;
        case "DECREMENT":
            if (state>0){
                return state - action.payload;
            }
            else {
                alert ("Number smaller than 0 is not allow");
            }
        break;
        default:
            return state;
    }
}

export default StateChange;