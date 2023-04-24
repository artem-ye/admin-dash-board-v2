import { Button } from '@mui/material';

const StyledButton = ({ children, ...props }) => {
	return (
		<Button size='large' color='secondary' variant='outlined' sx={{ backgroundColor: '#67c6b024' }} {...props}>
			{children}
		</Button>
	);
};

export default StyledButton;
