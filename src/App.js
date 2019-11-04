import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import AllPhotos from './components/AllPhotos';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      photos: [
        {
            src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
            width: 4,
            height: 3
        },
        {
            src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
            width: 1,
            height: 1
        },
      ]
    }
  }

  addMoreImages() {
    // when images are added via the upload button, add them to "photos" in state
    this.photos.push({src: "", width: null, height: null},)
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <AllPhotos/>
      </div>
    );
  }
}

export default App;