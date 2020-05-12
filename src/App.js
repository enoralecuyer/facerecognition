import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/navigation/Navigation';
import Rank from './components/rank/Rank';
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm';
import './App.css';

const particlesParams = {
  particles: {
    color: '#000000',
    size: {
      value: 1.5
    },
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles className='particles'
        params={particlesParams}
        />
        <Navigation />
        <Rank />
        <ImageLinkForm />
        {/* <FaceRecognition /> */}

      </div>
    );
  }
}

export default App;
