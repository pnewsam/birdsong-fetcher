import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class SongSearchButton extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = props.handleSubmit;
    console.log(this.handleSubmit)
  }

  // handleClick() {
  //   const proxy = "https://cors-anywhere.herokuapp.com/";
  //   const url = "http://www.xeno-canto.org/api/2/recordings?query=cnt:brazil";
  //   fetch(proxy + url)
  //   .then(r => r.json())
  //   .then(c => console.log(c))
  //   .catch(console.log(`Can't access ${url} - response. Blocked by browser?`));
  // }

  // handleSubmit()

  render() {
    return (
      <RaisedButton
      label="Fetch Songs"
      primary={true}
      onClick={this.handleSubmit}
      />
    )
  }
}

export default SongSearchButton;