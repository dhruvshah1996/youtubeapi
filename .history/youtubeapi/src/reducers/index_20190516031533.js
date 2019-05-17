import { combineReducers } from "redux";
import axios from 'axios';

const DEFAULT_STATE = {
    /*HANDLE API HERE*/
    const KEY = 'AIzaSyAFUNYmE1gfydRFrlb3Q05gXlPSgQmiY6I';
    axios.create({
        baseURL: 'https://www.googleapis.com/youtube/v3/',
        params: {
            part: 'snippet',
            maxResults: 5,
            key: KEY
        }
    })
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