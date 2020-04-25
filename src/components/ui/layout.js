import React from 'react';
import { Box, Container, Text } from 'theme-ui';

export default function Layout({ children }) {
	return (
		<Container
			p={3}
			sx={{
				display: 'flex',
				flexDirection: 'column',
				minHeight: '100vh',
			}}>
			<header>
				<h1>Wordcloud generator</h1>
				<Text variant="small">
					A modern wordcloud generator based on the{' '}
					<a href="https://www.jasondavies.com/wordcloud/">
						original wordcloud generator{' '}
					</a>{' '}
					by Jason Davies.
				</Text>
			</header>
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
