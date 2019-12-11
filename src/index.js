import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson')
	.then(response=> response.json())
	.then(data=> console.log(data))

ReactDOM.render(<App />, document.getElementById('root'));
