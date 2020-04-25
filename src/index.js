import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'theme-ui';

import App from './components/app';
import theme from './theme';

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</React.StrictMode>,
	document.querySelector('#root'),
);
