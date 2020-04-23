import React from 'react';
import { Box, Container } from 'theme-ui';

export default function Layout({ children }) {
	return (
		<Container
			px={3}
			py={2}
			sx={{
				display: 'flex',
				flexDirection: 'column',
				minHeight: '100vh',
			}}>
			<header>
				<h1>Wordcloud generator</h1>
				<small>
					A modernized wordcloud generator based on the original wordcloud
					generator by{' '}
					<a href="https://www.jasondavies.com/wordcloud/">Jason Davies</a>.
				</small>
			</header>
			<Box
				as="main"
				sx={{
					display: 'flex',
					flexDirection: 'column',
					flex: '1 1 auto',
				}}>
				{children}
			</Box>
			<Box
				as="footer"
				sx={{
					alignItems: 'center',
					display: 'flex',
					justifyContent: 'space-between',
				}}>
				<small>
					<a href="https://github.com/chrisrzhou/wordcloud-generator/">
						Github
					</a>
				</small>
				<small>
					© 2020 <a href="https://chrisrzhou.io/">Chris Zhou</a>
				</small>
			</Box>
		</Container>
	);
}
