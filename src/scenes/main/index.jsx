import { Box, TextField, Typography, styled, useTheme } from '@mui/material';
import { tokens, LIGHT_MODE } from '../../theme/';

const StyledTextField = styled(TextField)(({ theme }) => {
	if (theme.palette.mode === LIGHT_MODE) {
		return {};
	}

	const colors = tokens(theme.palette.mode);
	const greenAccentColor = colors.greenAccent[500];

	return {
		'&:hover label': {
			color: greenAccentColor,
		},
		'& label.Mui-focused': {
			color: greenAccentColor,
		},
		'& .MuiOutlinedInput-root': {
			'&:hover fieldset': {
				borderColor: greenAccentColor,
			},
			'&.Mui-focused fieldset': {
				borderColor: greenAccentColor,
			},
		},
	};
});

const Main = () => {
	const theme = useTheme();
	const colors = tokens(theme);

	return (
		<Box m='20px' sx={{ '& > *': { mb: '15px !important' } }}>
			<Typography variant='h3'>Hello</Typography>
			<Typography variant='h5' color={colors.greenAccent[400]}>
				World
			</Typography>
			<StyledTextField label='Your name' variant='outlined' />
		</Box>
	);
};

export default Main;
