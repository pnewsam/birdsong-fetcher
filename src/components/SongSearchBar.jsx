import React, { Component } from "react";
import TextField from 'material-ui/TextField';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import SongSearchButton from "./SongSearchButton";

class SongSearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.dataSource = [1,2,3]
  }

  render() {
    return(
      <Card>
        <CardTitle
          title="Search for songs"
          style={{paddingBottom: "0px"}}
        />
        <CardText>
          <TextField
            hintText="Common name"
            fullWidth={true}
          />
          <TextField
            hintText="County"
            fullWidth={true}
          />
          <TextField
            hintText="State"
            fullWidth={true}
          />
          <SongSearchButton />
        </CardText>
      </Card>
    )
  }
}

export default SongSearchBar;