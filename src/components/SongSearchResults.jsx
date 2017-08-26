import React, { Component } from "react";
// import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';

class SongSearchResults extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return(
      <div>
        <Subheader>
          Results
        </Subheader>
      </div>
    )
  }
}

export default SongSearchResults;