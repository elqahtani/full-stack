import React, { Component } from "react";

import {
	Col,
	Card,
	CardText,
	CardBody,
	CardLink,
	CardTitle,
	CardSubtitle
}	
	from "reactstrap";


export default class User extends Component {
	render() {
		const user = this.props.user
		return (
		<row>
            <Col>
              <Card>
              	<CardBody>
              		<CardTitle>{user.name}</CardTitle>
              		<CardSubtitle>{user.username}</CardSubtitle>
              	</CardBody>
              	<CardBody>
              		<CardText>Description</CardText>
              		<CardLink href={`mailto:${user.email}`}>{user.email}</CardLink>
              	</CardBody>
              </Card>
            </Col>
        </row>
          )
	}
}