import { Box, Typography } from '@mui/material';
import StyledButton from '../../components/controls/StyledButton';
import StyledTextField from '../../components/controls/StyledTextField';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const navigate = useNavigate();
	const handleLogin = () => navigate('/');
	const handleCancel = () => navigate('/');

	return (
		<Box display='flex' justifyContent='center' width={'100%'} mt={'25vh'}>
			<Box display='flex' flexDirection='column' gap='15px' width='500px'>
				<Typography variant='h3'>Login</Typography>
				<StyledTextField label='Email' />
				<StyledTextField label='Password' type='password' />
				<Box display='flex' justifyContent='flex-end' gap='10px'>
					<StyledButton title='Login' onClick={handleLogin}>
						Login
					</StyledButton>
					<StyledButton title='Cancel' onClick={handleCancel}>
						Cancel
					</StyledButton>
				</Box>
			</Box>
		</Box>
	);
};

export default Login;
