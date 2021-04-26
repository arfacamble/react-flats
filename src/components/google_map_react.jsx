import React, { Component } from 'react';
import Flat from './flat';

class GoogleMapReact extends Component {
  render () {
    const selectedFlat = this.props.selectedFlat;
    return (
      <div className="map-container">
        <Flat flat={selectedFlat} />
      </div>
    );
  }
}

export default GoogleMapReact
