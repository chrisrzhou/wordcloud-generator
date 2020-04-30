import Document from '@unified-doc/react-unified-doc';
import React, { useMemo, useEffect, useState } from 'react';
import { Box, Button, Card, Input, Textarea } from 'theme-ui';
import 'tippy.js/dist/tippy.css';
import '@unified-doc/react-unified-doc/src/index.css';

import { getAnnotations } from '../nlp';
import { Checkbox, Select } from './ui';

const contentTypeOptions = [
	{ value: 'html', label: 'html' },
	{ value: 'markdown', label: 'markdown' },
	{ value: 'text', label: 'text' },
];

const sx = {
	overflow: 'auto',
	'-mozTabSize': '2',
	scrollbarWidth: 'thin',
	tabSize: '2',
	whiteSpace: 'pre-wrap',
};

export default function Content({
	content: initialContent,
	selectedWord,
	showPreview,
	onToggleShowPreview,
	onUpdateContent,
}) {
	const [content, setContent] = useState(initialContent);
	const [contentType, setContentType] = useState('html');

	const annotations = useMemo(() => getAnnotations(content, selectedWord), [
		content,
		selectedWord,
	]);

	useEffect(() => {
		if (annotations.length > 0) {
			window.location.hash = annotations[0].id;
		}
	}, [annotations]);

	function handleUploadFile(event) {
		const file = event.target.files[0];
		file.text().then((fileContent) => {
			setContent(fileContent);
			onUpdateContent(fileContent);

			const extension = file.name.split('.').pop();
			let inferredContentType;
			switch (extension) {
				case 'htm':
				case 'html':
					inferredContentType = 'html';
					break;
				case 'md':
				case 'markdown':
					inferredContentType = 'markdown';
					break;
				default:
					inferredContentType = 'text';
			}

			setContentType(inferredContentType);
		});
	}

	function handleEditContent(event) {
		setContent(event.target.value);
	}

	function handleResetContent() {
		setContent(initialContent);
	}

	function handleUpdateContent() {
		onUpdateContent(content);
	}

	const disabled = content === initialContent;
	const isTextContentType = contentType === 'text';

	return (
		<>
			<Box
				my={3}
				sx={{
					alignItems: 'center',
					display: 'flex',
					justifyContent: 'space-between',
				}}>
				<Box mr={5} sx={{ flex: '0 0 auto' }}>
					<Checkbox
						id="preview"
						label="Preview"
						value={showPreview}
						onChange={onToggleShowPreview}
					/>
				</Box>
				{showPreview ? (
					<Select
						id="content-type"
						label="Content Type"
						options={contentTypeOptions}
						value={contentType}
						onChange={setContentType}
					/>
				) : (
					<Box sx={{ flex: '0 0 auto' }}>
						<Button
							disabled={disabled}
							ml={3}
							variant="secondary"
							onClick={handleResetContent}>
							Reset
						</Button>
						<Button disabled={disabled} ml={3} onClick={handleUpdateContent}>
							Update
						</Button>
					</Box>
				)}
			</Box>
			<Input my={3} type="file" onChange={handleUploadFile} />
			{showPreview ? (
				<Card as={isTextContentType ? 'pre' : undefined} sx={sx}>
					<Document
						annotations={annotations}
						content={content}
						contentType={contentType}
					/>
				</Card>
			) : (
				<Textarea
					sx={sx}
					rows={50}
					value={content}
					onChange={handleEditContent}
				/>
			)}
		</>
	);
}
