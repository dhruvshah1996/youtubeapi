import axios from 'axios';


const KEY = "AIzaSyBWHHxxUhdhUKXnEjkZs2GsMJed5apc0jU";
connAPI = () =>{
    axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&order=viewCount&relevanceLanguage=en&type=video&key=${KEY}')
    .then(data => {
        console.log(data.data)
    }).catch(e => e.console.error());
}

export function getVideoQueue(){
    
}