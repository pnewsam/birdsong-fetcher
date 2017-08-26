import React, { Component } from 'react';
import {Card} from "material-ui/Card";
import SongSearchBar from "./SongSearchBar";
import SongSearchResults from "./SongSearchResults";

class SongSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recordings: {}
    };
    this.populateResults = this.populateResults.bind(this);
  }

  populateResults(contents) {
    this.setState({
      recordings: contents
    })
    // console.log(this.state.recordings)
  }

  render() {
    return(
      <div className="columns">
        <div className="column">
          <SongSearchBar populateResults={this.populateResults}/>
          <SongSearchResults results={this.state.recordings}/>
        </div>
      </div>
    )
  }
}

export default SongSearch;