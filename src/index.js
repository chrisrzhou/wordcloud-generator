import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'theme-ui';

import theme from './theme';
import App from './components/app';

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</React.StrictMode>,
	document.querySelector('#root'),
);
