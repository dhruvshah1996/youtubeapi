import React from 'react';
import axios from 'axios';

import './App.css';

const App = () => {
  const KEY = "AIzaSyBWHHxxUhdhUKXnEjkZs2GsMJed5apc0jU";
  axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 8,
        key: KEY
    }
})
  return (
    <div className = "container">
      <h1>I will make a fire ass YouTube App!</h1>
      {/** BASIC REACT FROM HERE*/}
    </div>
  );
}

export default App;