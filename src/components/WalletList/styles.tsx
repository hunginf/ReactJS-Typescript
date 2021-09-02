import { TableCell } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

export const CellTable = styled(TableCell)({
	borderLeft: '0.5px solid #000',
	borderBottom: '0.5px solid #000',
});

export const CellTableHead = styled(TableCell)({
	borderLeft: '0.5px solid #000',
	borderBottom: '0.5px solid #000',
	backgroundColor: '#3f51b5',
	color: 'white'
});