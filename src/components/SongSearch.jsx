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
  }

  populateResults() {

  }

  render() {
    return(
      <div className="columns">
        <div className="column">
          <SongSearchBar populateResults={this.populateResults}/>
          <SongSearchResults />
        </div>
      </div>
    )
  }
}

export default SongSearch;