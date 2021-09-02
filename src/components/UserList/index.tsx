import React, {Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { useHistory } from "react-router-dom";
import {CellTable, CellTableHead, NameLink} from './styles';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    border: '0.5px solid #000'
  },
  tableRow:{
    cursor: 'pointer',
    backgroundColor : '#f9f9f9',
    '&:hover': {
      backgroundColor: 'red'
    }
  }
});

interface User {
  id: number,
  name: string,
  account_ids: Number[]
}

interface Users extends Array<User> {};

export default function UserList(props: {users: Users}) {
  const classes = useStyles();
  const history = useHistory();

  const onSelect = (user: any) => {
    history.push(`/users/${user.id}/accounts`);
  }

  return (
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <CellTableHead align="center">Name</CellTableHead>
            <CellTableHead align="center">Account</CellTableHead>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.users.map((user, index) => (<Fragment key={index}>
            <TableRow>
                <CellTable rowSpan={user.account_ids.length + 1} align="center">
                  <NameLink onClick={() => onSelect(user)}>{user.name}</NameLink>
                </CellTable>
            </TableRow>
              {user.account_ids.map((uid, idx) => <TableRow key={idx}><CellTable align="center">{uid}</CellTable></TableRow>)}
          </Fragment>
          ))}
        </TableBody>
      </Table>
  );
}
