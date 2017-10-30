import React, { Component } from "react";

import { Button } from 'reactstrap';


export default class Class extends Component {
  render() {
    return (
      <div>
        {this.props.data.map(user => {
          return (
            <div key={user.id}>
            <br/>
              <h1>{user.username}</h1>
              <h2>{user.name}</h2>
              <h3>{user.email}</h3>
              <Button color = "Danger">Danger!</Button>
            </div>
          );
        })}
      </div>
    );
  }
}