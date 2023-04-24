import { CssBaseline } from '@mui/material';
import TopBar from './components/topbar';
// import Main from './scenes/main';
import { AppThemeProvider } from './theme';
import { ProSidebarProvider } from 'react-pro-sidebar';
import Sidebar from './components/sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EditUserProfile from './scenes/editUserProfile';
import Login from './scenes/login';

const MainLayout = () => (
	<>
		<Sidebar />
		<main className='content'>
			<TopBar />
			<EditUserProfile />
		</main>
	</>
);

// const LoginLayout = () => <h1>login</h1>;

function App() {
	return (
		<BrowserRouter>
			<AppThemeProvider>
				<ProSidebarProvider>
					<CssBaseline />
					<div className='app'>
						<Routes>
							<Route Component={MainLayout} path='/' />
							<Route Component={Login} path='/login' />
						</Routes>
						{/* <Sidebar />
						<main className='content'>
							<TopBar />
							<EditUserProfile />
						</main> */}
					</div>
				</ProSidebarProvider>
			</AppThemeProvider>
		</BrowserRouter>
	);
}

export default App;
