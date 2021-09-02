import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
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
  const [selectedId, setSelectedId] = React.useState<Number>();

  const onSelect = (user: any) => {    
    setSelectedId(user.id);
    history.push(`/users/${user.id}/accounts`);
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="center">User Name</TableCell>
            <TableCell align="center">User ID</TableCell>
            <TableCell align="center">#</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.users.map((user, index) => (
            <TableRow key={user.id} hover className={classes.tableRow}
                onClick={() => onSelect(user)} selected={selectedId === index}>
              <TableCell component="th" scope="row">{user.id}</TableCell>
              <TableCell align="center">{user.name}</TableCell>
              <TableCell align="center">{user.account_ids.join(" ,")}</TableCell>
              <TableCell align="center">...</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
