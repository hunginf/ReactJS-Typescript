import React from 'react';
import {
  useParams,
  useHistory
} from "react-router-dom";
import apis from '../../apis';
import WalletList from '../../components/WalletList';
import {
	Box, Button, Container,
	Grid, CircularProgress, Typography
} from '@material-ui/core';

interface ParamProps {
	id?: string | undefined,
}

interface Attribute {
  attributes: any
}

interface Attributes extends Array<Attribute> {};

const WalletContainer = () => {
	const history = useHistory();
	const [loading, setLoading] = React.useState<Boolean>(false);
	const params = useParams<ParamProps>();
	const [attrs, setAttrs] = React.useState<Attributes>([]);

	React.useEffect(() => {
		if (params.id) {
			setLoading(true);
			apis.get<Attributes>(`/users/${params.id}/accounts`).then(res => {
				if (res.ok && res.data) {
					setAttrs(res.data);
				}
				setLoading(false);
			})
		}
	}, [params]);

	return <Container>
		<Box py={3}>
			<Grid container>
				<Grid item>
					<Button variant="contained" onClick={() => history.goBack()}>BACK</Button>					
				</Grid>
				<Grid item xs>
					<Typography variant="h5" component="h5">Account Detail</Typography>
				</Grid>
				<Grid item />
			</Grid>
		</Box>
		{loading ? <Box width={1} height={`calc(100vh - 180px)`}><CircularProgress /></Box> : <WalletList attrs={attrs} />}
	</Container>
}

export default WalletContainer;