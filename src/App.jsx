import { CssBaseline } from '@mui/material';
import TopBar from './components/topbar';
import Main from './scenes/main';
import { AppThemeProvider } from './theme';
import { ProSidebarProvider } from 'react-pro-sidebar';
import Sidebar from './components/sidebar';
import { BrowserRouter } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<AppThemeProvider>
				<ProSidebarProvider>
					<CssBaseline />
					<div className='app'>
						<Sidebar />
						<main className='content'>
							<TopBar />
							<Main />
						</main>
					</div>
				</ProSidebarProvider>
			</AppThemeProvider>
		</BrowserRouter>
	);
}

export default App;
