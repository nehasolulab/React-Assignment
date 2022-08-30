import { INCREMENT,DECREMENT } from "../constants";
const initialState = {
    value:0,
    errorMsg:""
};

const StateChange = (state=initialState , action) => {
    switch (action.type){
        case INCREMENT:
            return {...state,value:action.payload+state.value,errorMsg:""}
        case DECREMENT:
            if (state.value>0){
                return {...state,value:state.value-action.payload,errorMsg:""}
            }
            else {
                // value less than 0
                return {...state,errorMsg:"Number below 0 is not allow"}
            }
        default:
            return state;
    }
}

export default StateChange;

