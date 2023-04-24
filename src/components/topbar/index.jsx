import { useContext } from 'react';
import { ColorModeContext, LIGHT_MODE } from '../../theme/';
import { Box, IconButton, useTheme } from '@mui/material';
import {
	LightModeOutlined as LightModeIcon,
	DarkModeOutlined as DarkModeIcon,
	LogoutOutlined as LogOutIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const TopBar = () => {
	const { toggleColorMode } = useContext(ColorModeContext);
	const theme = useTheme();
	const navigate = useNavigate();

	const handleToggleMode = () => {
		toggleColorMode();
	};

	return (
		<Box display='flex' justifyContent='flex-end'>
			<IconButton onClick={handleToggleMode}>
				{theme.palette.mode === LIGHT_MODE ? <LightModeIcon /> : <DarkModeIcon />}
			</IconButton>
			<IconButton onClick={() => navigate('login')}>
				<LogOutIcon />
			</IconButton>
		</Box>
	);
};

export default TopBar;
