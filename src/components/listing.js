import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

const Venue = (props) => {
	return (
		<div>
			<h1>{this.props.data.venue_title}</h1>
			{/*<img src={this.props.data.venue_img} /> */}
			<h2>{this.props.data.venue_address}</h2>
			<h2>{this.props.data.venue_phone}</h2>
			<h2>{this.props.data.venue_email}</h2>
		</div>
	);
}

class Listing extends Component {
	constructor(props) {
		super(props);
		this.state = {
			venues: this.props.dataset;
		}
	}
  render() {
    return (
    	<div>
    		<ul>
    			{this.state.venues.map((venue) => <li><Venue data={venue} /></li>)}
    		</ul>
    	</div>
    );
  }
}

export default Listing;
