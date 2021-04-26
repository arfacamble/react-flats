import React, { Component } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

import FlatList from './flat_list';
// import GoogleMapReact from './google_map_react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      viewport: {
        width: "100%",
        height: "100%",
        latitude: 48.884211,
        longitude: 2.34689,
        zoom: 16
      },
    };
  }

  selectFlat = (coords) => {
    const newLat = parseFloat(coords.lat);
    const newLng = parseFloat(coords.lng);
    this.setState({
      viewport: {
        width: "100%",
        height: "100%",
        latitude: newLat,
        longitude: newLng,
        zoom: 16
      }
    });
  }

  render() {
    const { viewport } = this.state;
    return (
      <div>
        <FlatList selectFlat={this.selectFlat} />
        <div className="map-container">
          <ReactMapGL
            {...viewport}
            mapStyle="mapbox://styles/mapbox/outdoors-v11"
            mapboxApiAccessToken="XXX"
          >
            <Marker
              latitude={viewport.latitude}
              longitude={viewport.longitude}
              offsetLeft={-20}
              offsetTop={-10}
            >
              <p>O</p>
            </Marker>
          </ReactMapGL>
        </div>
      </div>
    );
  }
}

export default App;
