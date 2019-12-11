import React, { Component } from 'react';
import Quakes from "./quakes";
import Maps from "./maps";

class App extends Component {

  state = {
    earthquakes: []
  }

// componentDidMount loads data after page has rendered. First page renders with no data then page re-renders with data.
  componentDidMount() {
    fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson')
    .then(response => response.json())
    .then(data => {this.setState({earthquakes: data.features})
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="app">
        <div className="mapContainer">
          <Maps earthquakes={this.state.earthquakes}/>
        </div>
        <div className="quakeContainer">
          <h1>Earthquakes from the past week: </h1>
          <Quakes data={this.state.earthquakes} />
        </div>
      </div>
    );
  }
}

export default App;
