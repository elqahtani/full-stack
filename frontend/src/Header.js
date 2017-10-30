import React, { Component } from "react";

import {
	Jumbotron,
	Container,
	Button
}	
	from "reactstrap";


export default class Header extends Component {
	render() {
  		return (
    	<div>
      		<Jumbotron fluid>
        		<Container fluid>
          			<h1 className="display-3">Simple Social Media</h1>
          			<p className="lead">Welcome to simple social media</p>
          			<Button color="primary">Submit</Button>{' '}
        		</Container>
      		</Jumbotron>
   		 </div>
  		);
	};  
}