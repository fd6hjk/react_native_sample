import { TEST, ADD_TIME, GET_TIMES, REMOVE_TIME } from "../actions/actions";

import { combineReducers } from "redux";

const reducer = (state = { msg : "" }, action) => {
    
    switch (action.type){
        case TEST:
            return { msg : action.data.msg }
        default:
            return state;
    }
}

const timeReducer = (state = [], action) => {
    switch(action.type){
        case ADD_TIME:
            return [ ...state, action.item ];

        case REMOVE_TIME:

            const index = state.findIndex((e) => e === action.item);

            if(index === -1) return state;

            return [ ...state.slice(0, index), ...state.slice(index + 1, state.length) ];

    
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    reducer,
    timeReducer
})

export default rootReducer;