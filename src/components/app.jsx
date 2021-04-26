import React, { Component } from 'react';
import FlatList from './flat_list';
import GoogleMapReact from './google_map_react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFlat: {
        name: "Charm at the Steps of the Sacre Coeur/Montmartre",
        imageUrl: "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg",
        price: 164,
        priceCurrency: "EUR",
        lat: 48.884211,
        lng: 2.34689
      }
    };
  }

  selectFlat = (flat) => {
    this.setState({ selectedFlat: flat });
  }

  render() {
    const selectedFlat = this.state.selectedFlat;
    return (
      <div>
        <FlatList selectFlat={this.selectFlat} />
        <GoogleMapReact selectedFlat={selectedFlat} />
      </div>
    );
  }
}

export default App;
