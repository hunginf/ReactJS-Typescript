import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

interface User {
  id: number,
  name: string,
  account_ids: Number[],
  user_id: Number[],
  balance: Number[],
}

interface Attribute {
  attributes: User
}

interface Attributes extends Array<Attribute> {};

export default function WalletList(props: {attrs: Attributes}) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="center">User Name</TableCell>
            <TableCell align="center">User ID</TableCell>
            <TableCell align="center">Balance</TableCell>
            <TableCell align="center">#</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {props.attrs.map((attr) => <TableRow key={attr.attributes.id}>
              <TableCell component="th" scope="row">{attr.attributes.id}</TableCell>
              <TableCell align="center">{attr.attributes.name}</TableCell>
              <TableCell align="center">{attr.attributes.user_id}</TableCell>
              <TableCell align="center">{attr.attributes.balance}</TableCell>
              <TableCell align="center">...</TableCell>
            </TableRow>)}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
