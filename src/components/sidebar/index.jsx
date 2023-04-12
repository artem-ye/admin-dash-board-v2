import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useTheme } from '@mui/material';
import { Sidebar as ProSideBar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import {
	HomeOutlined as HomeIcon,
	HelpOutlineSharp as DocumentationIcon,
	CalendarMonthOutlined as CalendarIcon,
	PieChartOutline as PieChartIcon,
	StackedLineChartOutlined as LineChartIcon,
} from '@mui/icons-material';

import MenuSubTitle from './MenuSubtitle';
import { tokens } from '../../theme';
import SidebarLogo from './SidebarLogo';

const Sidebar = () => {
	const theme = useTheme();
	const mode = theme.palette.mode;
	const colors = tokens(mode);
	const BG_COLOR = colors.primary[400];
	const HOVER_COLOR = colors.blueAccent[400];

	const { collapsed } = useProSidebar();
	const [activeItem, setActiveItem] = useState('/');
	const navigate = useNavigate();

	useEffect(() => {
		navigate(activeItem);
	}, [activeItem, navigate]);

	const renderMenuItem = ({ title, path, Icon }) => (
		<MenuItem icon={<Icon />} active={activeItem === path} onClick={() => setActiveItem(path)}>
			{title}
		</MenuItem>
	);

	const barRootStyles = {
		'& ': { border: 'none' },
	};

	const menuItemStyles = {
		button: ({ active }) => {
			return {
				'&:hover': {
					backgroundColor: BG_COLOR,
					color: HOVER_COLOR,
				},
				...(active && { color: colors.blueAccent[500] }),
			};
		},
	};

	return (
		<ProSideBar rootStyles={barRootStyles} backgroundColor={BG_COLOR}>
			<SidebarLogo />

			<div style={{ marginTop: '20px' }} />
			<Menu menuItemStyles={menuItemStyles}>
				{renderMenuItem({ title: 'Dashboard', path: '/', Icon: HomeIcon })}
			</Menu>

			<MenuSubTitle title={'General'} collapsed={collapsed} />
			<Menu menuItemStyles={menuItemStyles}>
				{renderMenuItem({ title: 'Documentation', path: '/docs', Icon: DocumentationIcon })}
				{renderMenuItem({ title: 'Calendar', path: '/calendar', Icon: CalendarIcon })}
			</Menu>

			<MenuSubTitle title={'Charts'} collapsed={collapsed} />
			<Menu menuItemStyles={menuItemStyles}>
				{renderMenuItem({ title: 'Pie charts', path: '/pieCharts', Icon: PieChartIcon })}
				{renderMenuItem({ title: 'Line charts', path: '/lineCharts', Icon: LineChartIcon })}
			</Menu>
		</ProSideBar>
	);
};

export default Sidebar;
