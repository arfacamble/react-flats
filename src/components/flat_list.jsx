import React, { Component } from 'react';
import Flat from './flat';
import flats from '../../data/flats';

class FlatList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flats
    };
  }

  render() {
    const flats = this.state.flats;
    return (
      <div className="flat-list">
        {flats.map(flat => <Flat flat={flat} key={flat.lat} selectFlat={this.props.selectFlat} />)}
      </div>
    );
  }
}

export default FlatList;
