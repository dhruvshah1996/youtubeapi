import { combineReducers } from "redux";

const videoReducer = (state = "SEARCHED_VIDEO" , action) => {
    switch(action.type){
        case 'ON_CLICK':
        case 'SEARCH_VIDEO':
        default:
            return state;
    }
};