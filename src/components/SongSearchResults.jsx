import React, { Component } from "react";
import Subheader from 'material-ui/Subheader';
import Recording from "./Recording";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

function SongSearchResults(props) {
  let results = Object.values(props.results)
  console.log(results)
  results = results.map(r=>
    <TableRow>
      <TableRowColumn>{r.gen} {r.sp}</TableRowColumn>
      <TableRowColumn>{r.loc}</TableRowColumn>
      <TableRowColumn>{r.rec}</TableRowColumn>
      <TableRowColumn><a href={r.file}>Audio</a></TableRowColumn>
    </TableRow>
  )
  return(
    <div>
      <Subheader>Results</Subheader>
      <Table>
        <TableHeader displaySelectAll={false}>
          <TableRow>
            <TableHeaderColumn>Scientific Name</TableHeaderColumn>
            <TableHeaderColumn>Location</TableHeaderColumn>
            <TableHeaderColumn>Recorder</TableHeaderColumn>
            <TableHeaderColumn>Audio</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {results}
        </TableBody>
      </Table>
    </div>
  )
}

export default SongSearchResults;