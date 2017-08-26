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
      <TableRowColumn style={{verticalAlign: "middle"}}>{r.gen} {r.sp}</TableRowColumn>
      <TableRowColumn style={{verticalAlign: "middle"}}>{r.loc}</TableRowColumn>
      <TableRowColumn style={{verticalAlign: "middle"}}>{r.rec}</TableRowColumn>
      <TableRowColumn style={{verticalAlign: "middle"}}>
        <audio controls preload="none">
          <source src={r.file} type="audio/mpeg" />
        </audio>
      </TableRowColumn>
    </TableRow>
  )
  return(
    <div>
      <Subheader>Results</Subheader>
      <Table>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false} style={{fontSize: "1.5em"}}>
          <TableRow>
            <TableHeaderColumn style={{verticalAlign: "middle", fontSize: ".7em"}}>Scientific Name</TableHeaderColumn>
            <TableHeaderColumn style={{verticalAlign: "middle", fontSize: ".7em"}}>Location</TableHeaderColumn>
            <TableHeaderColumn style={{verticalAlign: "middle", fontSize: ".7em"}}>Recorder</TableHeaderColumn>
            <TableHeaderColumn style={{verticalAlign: "middle", fontSize: ".7em"}}>Audio</TableHeaderColumn>
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