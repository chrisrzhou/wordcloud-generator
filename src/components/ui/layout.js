import React from 'react';

import Box from './box';
import Container from './container';
import Text from './text';

export default function Layout({ children }) {
	return (
		<Container
			p={3}
			sx={{
				display: 'flex',
				flexDirection: 'column',
				minHeight: '100vh',
			}}>
			<Box as="header">
				<h1>Wordcloud generator</h1>
				<Text variant="small">
					<p>
						A modern wordcloud generator based on the{' '}
						<a href="https://www.jasondavies.com/wordcloud/">
							original wordcloud generator{' '}
						</a>{' '}
						by Jason Davies.
					</p>
					<p>
						Built using the{' '}
						<a href="https://github.com/chrisrzhou/react-wordcloud">
							<code>react-wordcloud</code>
						</a>{' '}
						and{' '}
						<a href="https://github.com/chrisrzhou/unified-doc/tree/master/packages/react-unified-doc">
							<code>react-unified-doc</code>
						</a>{' '}
						packages.
					</p>
				</Text>
			</Box>
			<Box
				as="main"
				sx={{
					display: 'flex',
					flexDirection: 'column',
					flex: '1 1 auto',
				}}
				py={3}>
				{children}
			</Box>
			<Box
				as="footer"
				sx={{
					alignItems: 'center',
					display: 'flex',
					justifyContent: 'space-between',
				}}>
				<Text variant="small">
					<a href="https://github.com/chrisrzhou/wordcloud-generator/">
						Github
					</a>
				</Text>
				<Text variant="small">
					© 2020 <a href="https://chrisrzhou.io/">Chris Zhou</a>
				</Text>
			</Box>
		</Container>
	);
}
