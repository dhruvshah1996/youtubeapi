import { combineReducers } from "redux";

const DEFAULT_STATE = {
    /*HANDLE API HERE??*/
    /*OFFICIAL BLANK PAGE HERE*/
}

const videoReducer = (state = DEFAULT_STATE , action) => {
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