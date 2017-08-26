import React, { Component } from "react";
import TextField from 'material-ui/TextField';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import SongSearchButton from "./SongSearchButton";

class SongSearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commonNameVal: "",
      countyVal: "",
      stateVal: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.composeQuery = this.composeQuery.bind(this);
    this.formatQueryString = this.formatQueryString;
    this.populateResults = props.populateResults;
  }

  handleChange(e) {
    let val = e.target.value;
    let field = e.target.getAttribute("data-field");
    this.setState({
      [field]: val
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let query = this.composeQuery();
    let url = "https://cors-anywhere.herokuapp.com/http://www.xeno-canto.org/api/2/recordings?query=" + query;
    fetch(url)
    .then(response => response.json())
    .then(contents => {
      this.populateResults(contents.recordings.slice(0,20));
      // console.log(contents.recordings)
    })
    .catch(console.log(`Can't access ${url} - response. Blocked by browser?`));
  }

  composeQuery() {
    let name = this.formatQueryString(this.state.commonNameVal);
    let county = this.formatQueryString(this.state.countyVal);
    let state = this.formatQueryString(this.state.stateVal);
    let query = name + "&loc=" + county + "%20" + state;
    return query;
  }

  formatQueryString(string) {
    return(string.toLowerCase().replace(" ","%20"));
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
            data-field="commonNameVal"
            fullWidth={true}
            onChange={this.handleChange}
          />
          <TextField
            hintText="County"
            data-field="countyVal"
            fullWidth={true}
            onChange={this.handleChange}
          />
          <TextField
            hintText="State"
            data-field="stateVal"
            fullWidth={true}
            onChange={this.handleChange}
          />
          <SongSearchButton
            handleSubmit={this.handleSubmit}
          />
        </CardText>
      </Card>
    )
  }
}

export default SongSearchBar;