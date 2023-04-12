import { useContext } from 'react';
import { ColorModeContext, LIGHT_MODE } from '../../theme/';
import { Box, IconButton, useTheme } from '@mui/material';
import { LightModeOutlined as LightModeIcon, DarkModeOutlined as DarkModeIcon } from '@mui/icons-material';

const TopBar = () => {
	const { toggleColorMode } = useContext(ColorModeContext);
	const theme = useTheme();

	const handleToggleMode = () => {
		toggleColorMode();
	};

	return (
		<Box display='flex' justifyContent='flex-end'>
			<IconButton onClick={handleToggleMode}>
				{theme.palette.mode === LIGHT_MODE ? <LightModeIcon /> : <DarkModeIcon />}
			</IconButton>
		</Box>
	);
};

export default TopBar;
