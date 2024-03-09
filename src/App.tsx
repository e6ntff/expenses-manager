import React, { useEffect } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import AppHeader from './components/AppHeader';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import firebaseApp from './utils/firebase';
import AppRoutes from './components/AppRoutes';
import { observer } from 'mobx-react-lite';
import { ConfigProvider, Layout, theme } from 'antd';
import { userStore } from 'utils/userStore';
import getCurrencyRates from 'utils/getCurrencyRates';
import { Content, Header } from 'antd/es/layout/layout';
import { Scrollbars } from 'react-custom-scrollbars';

const auth = getAuth(firebaseApp);

const App: React.FC = observer(() => {
	const { logged } = userStore;
	const { theme: currentTheme } = userStore;
	const { setCurrencyRates, setCurrency, setUser } = userStore;

	useEffect(() => {
		getCurrencyRates().then(setCurrencyRates);
		setCurrency(localStorage.getItem('currency') || 'USD');

		const unsubscribe = onAuthStateChanged(auth, (authUser) => {
			setUser(JSON.parse(JSON.stringify(authUser)) || {});
		});

		return () => unsubscribe();
	}, [setCurrency, setCurrencyRates, setUser]);

	const { paddingLG, borderRadiusLG } = theme.useToken().token;

	return (
		<ConfigProvider theme={{ algorithm: currentTheme.algorithm }}>
			<Scrollbars
				autoHide
				autoHideTimeout={1000}
				autoHideDuration={200}
			>
				<Router>
					<Layout
						style={{
							margin: 'auto',
							minBlockSize: '100%',
						}}
					>
						{logged && (
							<Header
								style={{
									inlineSize: 'min(100%, 960px)',
									margin: 'auto',
									position: 'sticky',
									inset: 0,
									zIndex: 1,
									borderEndEndRadius: borderRadiusLG,
									borderEndStartRadius: borderRadiusLG,
								}}
							>
								<AppHeader />
							</Header>
						)}
						<Layout
							style={{
								blockSize: '100%',
								inlineSize: 'min(100%, 960px)',
								margin: 'auto',
							}}
						>
							<Layout
								style={{
									padding: paddingLG,
								}}
							>
								<Content
									style={{
										padding: paddingLG,
										margin: 'auto',
										inlineSize: `${logged ? '100%' : 'max-content'}`,
										blockSize: 'min-content',
										borderRadius: '0.5em',
									}}
								>
									<AppRoutes />
								</Content>
							</Layout>
						</Layout>
					</Layout>
				</Router>
			</Scrollbars>
		</ConfigProvider>
	);
});

export default App;
