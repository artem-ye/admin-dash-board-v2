import { Box, Typography, useTheme } from '@mui/material';
import { tokens } from '../../theme/';
import StyledTextField from '../../components/controls/StyledTextField';

const Main = () => {
	const theme = useTheme();
	const colors = tokens(theme);

	return (
		<Box m='20px' sx={{ '& > *': { mb: '15px !important' } }}>
			<Typography variant='h3'>Hello</Typography>
			<Typography variant='h5' color={colors.greenAccent[400]}>
				World
			</Typography>
			<StyledTextField label='Your name' />
		</Box>
	);
};

export default Main;
