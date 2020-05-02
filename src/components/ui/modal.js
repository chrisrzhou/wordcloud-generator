import React, { useRef } from 'react';

import Box from './box';
import Button from './button';
import FlexLayout from './flex-layout';
import Card from './card';
import Container from './container';
import Text from './text';

import {
	useClickOutside,
	useDisableDocumentScroll,
	useEscape,
} from '../../hooks';

export default function Modal({
	children,
	shown,
	submitText,
	title,
	onHide,
	onSubmit,
}) {
	const modalRef = useRef();

	function handleHide() {
		if (shown) {
			onHide();
		}
	}

	useClickOutside(modalRef, handleHide);
	useDisableDocumentScroll(shown);
	useEscape(handleHide);

	if (!shown) {
		return null;
	}

	return (
		<Box
			bg="backdrop"
			sx={{
				bottom: 0,
				left: 0,
				position: 'fixed',
				right: 0,
				top: 0,
				zIndex: 'modal',
			}}>
			<Container
				ref={modalRef}
				sx={{
					height: 'calc(80vh)',
					overflow: 'hidden',
					transform: 'translateY(10vh)',
				}}>
				<Card sx={{ height: '100%' }}>
					<FlexLayout
						flexDirection="column"
						justifyContent="space-between"
						sx={{ height: '100%' }}>
						<Text as="h2">{title}</Text>
						<Box
							sx={{
								flex: '1 1 auto',
								overflow: 'auto',
								scrollbarWidth: 'thin',
							}}>
							{children}
						</Box>
						<FlexLayout justifyContent="flex-end">
							<Button variant="secondary" onClick={onHide}>
								Cancel
							</Button>
							<Button onClick={onSubmit}>{submitText}</Button>
						</FlexLayout>
					</FlexLayout>
				</Card>
			</Container>
		</Box>
	);
}
