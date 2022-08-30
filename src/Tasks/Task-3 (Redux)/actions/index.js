import { INCREMENT,DECREMENT } from "../constants";

export const incNumber = (num) => {
    return {
        type:INCREMENT,
        payload:num
    }
}

export const decNumber = (num) => {
    return {
        type:DECREMENT,
        payload:num
    }
}