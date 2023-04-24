import { Box, Typography } from '@mui/material';
import StyledTextField from '../../components/controls/StyledTextField';
import StyledButton from '../../components/controls/StyledButton';

const EditUserProfile = () => {
	return (
		<Box m='20px'>
			<Box display='flex' gap='20px' justifyContent='center'>
				{/* <Box>
					<img
						alt='user-ava'
						src='./assets/user.jpeg'
						width='100px'
						height='100px'
						style={{ cursor: 'pointer', borderRadius: '50%', objectFit: 'cover' }}
					/>
				</Box> */}
				<Box display='flex' flexDirection='column' gap='15px' width='500px'>
					<Typography variant='h3'>Edit user profile</Typography>
					<StyledTextField label='First Name' />
					<StyledTextField label='Last name' />
					<StyledTextField label='Email' />
					<StyledTextField label='Phone' />
					<StyledTextField label='Address' />
					<Box display='flex' justifyContent='flex-end'>
						<StyledButton title='Save'>Update profile data</StyledButton>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default EditUserProfile;
