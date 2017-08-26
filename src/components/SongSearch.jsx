import React, { Component } from 'react';
import {Card} from "material-ui/Card";
import SongSearchBar from "./SongSearchBar";
import SongSearchResults from "./SongSearchResults";

class SongSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <div className="columns">
        <div className="column">
          <SongSearchBar />
          <SongSearchResults />
        </div>
      </div>
    )
  }
}

export default SongSearch;