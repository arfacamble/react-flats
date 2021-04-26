import React, { Component } from 'react';

class Flat extends Component {
  handleClick = (event) => {
    const { selectFlat } = this.props;
    selectFlat(event.target);
  };

  render() {
    const { flat } = this.props;
    return (
      <div className="card" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${flat.imageUrl})` }}>
        <div className="card-category">
          {flat.price}
          &nbsp;
          {flat.priceCurrency}
        </div>
        <div className="card-description">
          <h2>{flat.name}</h2>
        </div>
        <a className="card-link" href="#" onClick={this.handleClick}></a>
      </div>
    );
  }
};

export default Flat;
