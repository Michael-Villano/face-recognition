import React, { Component } from 'react';
import Tilt from 'react-tilt';
import './FaceRecognition.css';

class FaceRecognition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: this.props.boxes,
      boxCount: this.props.boxes.length
    }
  }

  setNumberOfBoxes() {
    if(this.props.boxes.length !== this.state.boxCount) {
      console.log('changing...')
      this.setState({boxCount: this.props.boxes.length})
    }
    return this.set
  }

  render() {
    return (
      <div className='ma center'>
        <div className='image-scan-space'>
          <Tilt className='Tilt-img' options={{reverse: false,  // reverse the tilt direction
                      max: 15,    // max tilt rotation (degrees)
                      perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
                      scale: 1,
                      glare: true,
                      'max-glare': 1,
                      'glare-prerender': false}}>
              <div className='ma'>
                <img id='inputimage' className='shadow-5' src={this.props.imageURL} alt=''/>
                  {this.props.boxes.map((box, i) => <div key={i} className="tilt-inner bounding-box" style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>)}
              </div>
          </Tilt>
        </div>
      </div>
    )
  }
}

export default FaceRecognition;
