import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export default function ExpTable(props) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        {props.id === 0 && (
          <TableHead>
            <TableRow>
              <TableCell>Company Name</TableCell>
              <TableCell align="right">Designation</TableCell>
              <TableCell align="right">Duration From&nbsp;</TableCell>
              <TableCell align="right">Duration To&nbsp;</TableCell>
              <TableCell align="right">Achievements&nbsp;</TableCell>
            </TableRow>
          </TableHead>
        )}

        <TableBody>
          <TableRow key={props.id} className="wrapper">
            <TableCell className="text">{props.data.companyName}</TableCell>
            <TableCell className="text">{props.data.designation}</TableCell>
            <TableCell className="text">{props.data.durationFrom}</TableCell>
            <TableCell className="text">{props.data.durationTo}</TableCell>
            <TableCell className="text">{props.data.achievements}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
