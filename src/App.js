import React, { Component } from 'react';
import Header from './components/Header';
import AllPhotos from './components/AllPhotos';
import ImageUploader from './components/ImageUploader';

import './App.css';

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
    this.addMoreImages = this.addMoreImages.bind(this);
    this.calculateAspectRatio = this.calculateAspectRatio.bind(this)
  }

  addMoreImages() {
    // assign width and height approximate aspect ratio to incoming image

    // when images are added via the upload button, add them to "photos" in state
    this.photos.push({src: "", width: null, height: null},)
  }

  calculateAspectRatio(image) {
    let width = image.naturalWidth
    let height = image.naturalHeight
    // divide image width by image height to determine aspect ratio
    if (width > height) {
      return [width, height] = [4,3]
    } else if (height > width) {
      return [width, height] = [3,4]
    } else if (width === height) {
      return [width, height] = [1,1]
    }
    // assign width and height that based on results
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <ImageUploader addMoreImages />
        <AllPhotos/>
      </div>
    );
  }
}

export default App;