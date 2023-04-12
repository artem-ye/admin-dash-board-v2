import { createContext, useMemo, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import { DARK_MODE, LIGHT_MODE } from './constants';
import { themSettings } from './themSettings';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const AppThemeProvider = ({ children }) => {
	const [mode, setMode] = useState(DARK_MODE);

	const colorModeReducer = useMemo(
		() => ({
			toggleColorMode: () => {
				setMode((prevMode) => (prevMode === LIGHT_MODE ? DARK_MODE : LIGHT_MODE));
			},
		}),
		[]
	);

	const theme = useMemo(() => createTheme(themSettings(mode)), [mode]);

	return (
		<ColorModeContext.Provider value={colorModeReducer}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</ColorModeContext.Provider>
	);
};
