import { combineReducers } from "redux";
import axios from 'axios';

const KEY = "AIzaSyBWHHxxUhdhUKXnEjkZs2GsMJed5apc0jU";
const connect = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 8,
        key: KEY
    }
})
const response = await connect.get('/search', {
    params: {
        q: termFromSearchBar
    }
})
const DEFAULT_STATE = {
    /*HANDLE API HERE*/
    
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