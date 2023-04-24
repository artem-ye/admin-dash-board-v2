import { DARK_MODE } from './constants';
import { tokens } from './tokens';

export const themSettings = (mode) => ({
	palette: {
		mode,
		...colorsSettings(mode),
	},
	typography: { ...typographySettings() },
});

const colorsSettings = (mode) => {
	const colors = tokens(mode);

	return {
		...(mode === DARK_MODE
			? {
					// palette values for dark mode
					primary: {
						main: colors.primary[500],
					},
					secondary: {
						main: colors.greenAccent[500],
					},
					neutral: {
						dark: colors.grey[700],
						main: colors.grey[500],
						light: colors.grey[100],
					},
					background: {
						default: colors.primary[500],
					},
					// success: {
					// 	main: '#67c6b024',
					// },
			  }
			: {
					// palette values for light mode
					primary: {
						main: colors.primary[100],
					},
					secondary: {
						main: colors.greenAccent[500],
					},
					neutral: {
						dark: colors.grey[700],
						main: colors.grey[500],
						light: colors.grey[100],
					},
					background: {
						default: '#fcfcfc',
					},
			  }),
	};
};

const typographySettings = () => ({
	fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
	fontSize: 12,
	h1: {
		fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
		fontSize: 40,
	},
	h2: {
		fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
		fontSize: 32,
	},
	h3: {
		fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
		fontSize: 24,
	},
	h4: {
		fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
		fontSize: 20,
	},
	h5: {
		fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
		fontSize: 16,
	},
	h6: {
		fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
		fontSize: 14,
	},
});
