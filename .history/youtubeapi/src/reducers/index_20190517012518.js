import axios from 'axios';
import SELECT from './../actions/index';
import GETQUE from './../actions/index'
import { combineReducers } from 'redux';

const KEY = "AIzaSyBWHHxxUhdhUKXnEjkZs2GsMJed5apc0jU";
connAPI = () =>{
    axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&order=viewCount&relevanceLanguage=en&type=video&key=${KEY}')
    .then(data => {
        console.log(data.data)
    }).catch(e => e.console.error());
}

function clickedSearchVideoReducer(state = [], action){
    switch(action.type){
        case 'SEARCHED':
            //make Axios call!!!!!
        default:
            return state;
    }
}

function videoQueue(state = {}, action){
    switch(action.type){
        case GETVIDEOQUEUE:
            // return [...action.payload.items]
    }
}

const mainReducer = combineReducers({
    clickedSearchVideo: clickedSearchVideoReducer,
    videoQueue: videoQueue,
})
;
export default mainReducer;