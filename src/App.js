import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';
import FaceRecognition from './components/FaceRecognition/FaceRecognition.js';
import BigLogo from './components/Logo/BigLogo.js';
import Signin from './components/Signin/Signin.js';
import Register from './components/Register/Register.js';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

const particleOptions = {"particles":{"number":{"value":43,"density":{"enable":false,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":1,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"grab"},"onclick":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":85.26810729164123,"line_linked":{"opacity":0.6}},"bubble":{"distance":85,"size":1,"duration":1,"opacity":0.1,"speed":3},"repulse":{"distance":100,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true}

const app = new Clarifai.App({
 apiKey: 'f13572983e504c9b97bcb5e854a8cf8c'
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '', 
      imageURL: '',
      boxes: [{}],
      scan: false,
      route: 'signin',
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
      },
      hasImage: false
    };
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }

  onScanClick = () => {
    this.setState({imageURL: this.state.input});
    app.models.predict(Clarifai.DEMOGRAPHICS_MODEL, this.state.input)
    .then(response => {
      if (response) {
        this.setState({hasImage: true});
        fetch('http://localhost:3001/image', {
          method: 'put',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            id: this.state.user.id
          })
        })
        .then(response => this.loadUser(response.json()))
        .then(count => {
          this.setState(Object.assign(this.state.user, { entries: count }));
        })
        this.displayFaceBox(this.calculateFaceLocations(response));
      }
    })
    .catch(error => console.log(error));
  }

  loadUser = (data) => {
    this.setState({user: {
          id: data.id,
          name: data.name,
          email: data.email,
          entries: data.entries,
          joined: data.joined
        }})
  }

  calculateFaceLocation = (box, width, height) => {
    return ( 
    {
      leftCol: box.left_col * width,
      topRow: box.top_row * height,
      rightCol: width - (box.right_col * width),
      bottomRow: height - (box.bottom_row * height)
    })
  }

  calculateFaceLocations = (data) => {
    const clarifaiFaces = data.outputs[0].data.regions.map(region => region.region_info.bounding_box)
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    const arrayOfBoxes = clarifaiFaces.map(faceBox => {
      return (this.calculateFaceLocation(faceBox, width, height));
    })
    return arrayOfBoxes;
  }

  displayFaceBox = (boxes) => {
    console.log(boxes);
    this.setState({boxes: boxes});
  }

  onRouteChange = (route) => {
    this.setState({route: route});
  }


  render() {
    return (
      <div className="App">
        <Particles className='particles'
          params={ particleOptions } />
        { this.state.route === 'home'
          ?<div>
            <Navigation hasImage={this.state.hasImage} onRouteChange={this.onRouteChange} />
            <div className='bottom'>
              {this.state.hasImage
              ?<FaceRecognition boxes={ this.state.boxes } imageURL={this.state.imageURL}/>
              :<BigLogo />
              }
              <ImageLinkForm name={this.state.user.name} entries={this.state.user.entries} onInputChange={this.onInputChange} onScanClick={ this.onScanClick }/>
            </div>
          </div>
          : (
              this.state.route === 'signin'
              ? <Signin className='Signin' loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
              : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
            )
        }
      </div>
    );
  }
}

export default App;
