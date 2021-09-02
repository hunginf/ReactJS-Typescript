import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {CellTable, CellTableHead} from './styles';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    border: '0.5px solid #000'
  }
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
    <Table className={classes.table} aria-label="simple table">
      <TableHead>
        <TableRow>
          <CellTableHead align="center">Id</CellTableHead>
          <CellTableHead align="center">User Name</CellTableHead>
          <CellTableHead align="center">Balance</CellTableHead>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.attrs.map((attr) => <TableRow key={attr.attributes.id}>
          <CellTable align="center">{attr.attributes.id}</CellTable>
          <CellTable align="center">{attr.attributes.name}</CellTable>
          <CellTable align="center">{attr.attributes.balance}</CellTable>
        </TableRow>)}
      </TableBody>
    </Table>
  );
}
