import { Box, IconButton, LinearProgress, Typography, useTheme } from '@mui/material';

import { MenuOutlined as MenuIcon } from '@mui/icons-material';
import { useProSidebar } from 'react-pro-sidebar';
import { tokens } from '../../theme';
import LazyImage from '../lazyImage';

const SidebarLogo = () => {
	const { collapsed, collapseSidebar } = useProSidebar();
	const theme = useTheme();
	const mode = theme.palette.mode;
	const colors = tokens(mode);

	const HOVER_COLOR = colors.blueAccent[400];

	const handleToggleCollapse = () => {
		collapseSidebar(!collapsed);
	};

	return (
		<>
			<Box display='flex' alignItems='center' justifyContent='space-between' p='30px 10px 0 20px'>
				{!collapsed && (
					<Typography variant='h3' style={{ minWidth: '150px' }}>
						MAIN MENU
					</Typography>
				)}
				<IconButton onClick={handleToggleCollapse} sx={{ '&:hover': { color: HOVER_COLOR } }}>
					<MenuIcon />
				</IconButton>
			</Box>

			{
				<Box
					display={collapsed ? 'none' : 'flex'}
					flexDirection='column'
					alignItems='center'
					justifyContent='center'
					mt='20px'
					gap='10px'
					overflow={'hidden'}
				>
					<LazyImage
						path='./assets/user.jpeg'
						loadError='./logo192.png'
						placeHolder={
							<Box
								width='100px'
								height='100px'
								display='flex'
								alignItems='center'
								justifyContent='center'
							>
								<Typography letterSpacing='1px' color={colors.grey[300]}>
									loading...
									<LinearProgress color='inherit' />
								</Typography>
							</Box>
						}
						width='100px'
						height='100px'
						style={{ cursor: 'pointer', borderRadius: '50%', objectFit: 'cover' }}
					/>

					<Typography variant='h3' fontWeight='800'>
						Artem Y.
					</Typography>
					<Typography variant='h5' color={colors.greenAccent[400]}>
						access: root
					</Typography>
				</Box>
			}
		</>
	);
};

export default SidebarLogo;
