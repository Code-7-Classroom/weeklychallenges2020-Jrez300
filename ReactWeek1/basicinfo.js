import React, { Component } from 'react';


class BasicInfo extends Component {
  render() {
      return (
          <div>   
   <p> Name: {this.props.name} </p>
    <p> Number: {this.props.number} </p>
     <p> DOB: {this.props.DOB}</p>
          </div>
      )
  }
}

export default BasicInfo;

  