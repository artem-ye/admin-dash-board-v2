import { CssBaseline } from '@mui/material';

import { AppThemeProvider } from './theme';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginRoute from './routes/login/login.route';
import MainRoute from './routes/main/main.route';

function App() {
	return (
		<BrowserRouter>
			<AppThemeProvider>
				<ProSidebarProvider>
					<CssBaseline />
					<div className='app'>
						<Routes>
							<Route path='/*' Component={MainRoute} />
							<Route path='/login' Component={LoginRoute} />
						</Routes>
					</div>
				</ProSidebarProvider>
			</AppThemeProvider>
		</BrowserRouter>
	);
}

export default App;
