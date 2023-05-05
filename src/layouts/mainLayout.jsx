import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar';
import TopBar from '../components/topbar';

const MainLayout = () => {
	return (
		<>
			<Sidebar />
			<main className='content'>
				<TopBar />
				<Outlet />
			</main>
		</>
	);
};

export default MainLayout;
