import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class FetchSongsButton extends Component {
  constructor(props) {
    super(props);
    this.name = props.name;
  }

  handleClick() {
    alert("Clicked!")
  }

  render() {
    return(
      <RaisedButton label="Default" />
    )
  }
}