import React from 'react';

import './App.css';
import SearchBar from './Components/SearchBar';

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