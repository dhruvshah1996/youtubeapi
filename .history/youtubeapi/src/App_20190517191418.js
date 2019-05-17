import React from 'react';

import './App.css';
import SearchBar from './Components/SearchBar';
import VideoView from './Components/VideoView';
import VideoQueue from './Components/VideoQueue';

const App = () => {
  return (
    <div>
    <SearchBar />
    <div>
    
      <div>
        <div>
          <VideoView />
        </div>
        <div>
          <VideoQueue />
        </div>
      </div>
    
    </div>
    </div>
  );
}
export default App;