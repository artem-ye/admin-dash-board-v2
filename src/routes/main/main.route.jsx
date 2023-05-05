import { Route, Routes } from 'react-router-dom';
import EditUserProfile from '../../scenes/editUserProfile';
import MainLayout from '../../layouts/mainLayout';
import Main from '../../scenes/main';

const MainRoute = () => {
	return (
		<>
			<Routes>
				<Route path='' element={<MainLayout />}>
					<Route index={true} element={<Main />} />
					<Route path='/profile' element={<EditUserProfile />}></Route>
					<Route path='/hello' element={<h1>hello</h1>}></Route>
				</Route>
			</Routes>
		</>
	);
};

export default MainRoute;
