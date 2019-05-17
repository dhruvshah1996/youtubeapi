import Axios from 'axios';


const KEY = "AIzaSyBWHHxxUhdhUKXnEjkZs2GsMJed5apc0jU";
connAPI = () =>{
    Axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&order=viewCount&relevanceLanguage=en&type=video&key=${KEY}')
    .then(data => {
        console.log(data.data)
    }).catch(e => e.console.error());
}

export const VIDEOQUEUE = 'GET_VIDEOQUEUE'
export function getVideoQueue(){
    let connection = connAPI;
    return{
        type: VIDEOQUEUE,
        payload: connection
    }
}

export const searchVideo = (input) =>{
    Axios.get('https://www.googleapis.com/youtube/v3/search')
}