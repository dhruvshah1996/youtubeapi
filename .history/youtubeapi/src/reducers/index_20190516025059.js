import { combineReducers } from "redux";

const BLANK_PAGE = {
    /*
    HANDLE API HERE??
    **/
}

const videoReducer = (state = BLANK_PAGE , action) => {
    switch(action.type){
        case 'NEXT_VIDEO':
        case 'SEARCH_VIDEO':
        default:
            return state;
    }
};

export default combineReducers({
    videos: videoReducer
}) 