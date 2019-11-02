import React from 'react';
import './App.css';
import Header from './components/Header';
import AllPhotos from './components/AllPhotos';

function App() {
  return (
    <div className="App">
      <Header/>
      <AllPhotos/>
    </div>
  );
}

export default App;