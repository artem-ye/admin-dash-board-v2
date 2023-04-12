import { Typography } from '@mui/material';

const MenuSubTitle = ({ title, collapsed }) => (
	<Typography
		variant='body2'
		fontWeight={600}
		noWrap
		style={{
			letterSpacing: '0.5px',
			padding: `20px ${collapsed ? '15' : '20'}px`,
		}}
	>
		{title}
	</Typography>
);

export default MenuSubTitle;
