import React, { Component } from "react";

import User from './User'


export default class Class extends Component {
  render() {
    return (
      <div>
        {this.props.data.map(user => {
          return <User user={user} />
        })}
      </div>
    );
  }
}