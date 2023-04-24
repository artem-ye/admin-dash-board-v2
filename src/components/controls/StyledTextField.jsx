import { TextField, styled } from '@mui/material';
import { LIGHT_MODE, tokens } from '../../theme';

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

			// '&.Mui-focused .MuiInputBase-input': {
			// 	color: greenAccentColor,
			// },

			// '&:hover .MuiInputBase-input': {
			// 	color: greenAccentColor,
			// },
		},
	};
});

export default StyledTextField;
