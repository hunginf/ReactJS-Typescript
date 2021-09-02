import React from 'react';
import UserList from '../../components/UserList';
import {Box, Container, Typography} from '@material-ui/core';


interface User {
  id: number,
  name: string,
  account_ids: Number[]
}

const UsersContainer = () => {
  	const [users, setUsers] = React.useState<Array<User>>([]);

  	React.useEffect(() => {
  		setUsers([
  			{"id":1,"name":"Alice","account_ids": [1,3,5]},
  			{"id":2,"name":"Bob","account_ids":[2,4]},
  			{"id":3,"name":"Carol","account_ids":[6]},
  			{"id":4,"name":"Dave","account_ids":[7,8]}
  		])
  	}, []);

	return <Container>
		<Box pt={5}>
			<Typography variant="h5" component="h5">User List</Typography>
		</Box>
		<UserList users={users} />
	</Container>
}

export default UsersContainer;