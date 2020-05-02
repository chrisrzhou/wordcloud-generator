import Document from '@unified-doc/react-unified-doc';
import React, { useMemo, useEffect, useState } from 'react';
import 'tippy.js/dist/tippy.css';
import '@unified-doc/react-unified-doc/src/index.css';

import {
	Button,
	Card,
	Checkbox,
	FileInput,
	FlexLayout,
	Select,
	Textarea,
} from './ui';
import { getAnnotations } from '../nlp';

function getInferredContentType(file) {
	const extension = file.name.split('.').pop();
	switch (extension) {
		case 'htm':
		case 'html':
			return 'html';
		case 'md':
		case 'markdown':
			return 'markdown';
		default:
			return 'text';
	}
}

const contentTypeOptions = [
	{ value: 'html', label: 'html' },
	{ value: 'markdown', label: 'markdown' },
	{ value: 'text', label: 'text' },
];

const contentStyles = {
	overflow: 'auto',
	mozTabSize: '2',
	scrollbarWidth: 'thin',
	tabSize: '2',
	whiteSpace: 'pre-wrap',
};

export default function Content({
	content: initialContent,
	selectedWord,
	onUpdateContent,
}) {
	const [content, setContent] = useState(initialContent);
	const [contentType, setContentType] = useState('html');
	const [showPreview, setShowPreview] = useState(false);

	const annotations = useMemo(() => getAnnotations(content, selectedWord), [
		content,
		selectedWord,
	]);

	useEffect(() => {
		setShowPreview(true);
	}, [selectedWord]);

	useEffect(() => {
		if (annotations.length > 0) {
			window.location.hash = annotations[0].id;
		}
	}, [annotations]);

	function handleUploadFile(event) {
		const file = event.target.files[0];
		file.text().then((fileContent) => {
			setContent(fileContent);
			setContentType(getInferredContentType(file));
			onUpdateContent(fileContent);
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

	return (
		<FlexLayout flexDirection="column">
			<FlexLayout alignItems="center" justifyContent="space-between">
				<Checkbox
					id="preview"
					label="Preview"
					value={showPreview}
					onChange={setShowPreview}
				/>
				{showPreview ? (
					<Select
						id="content-type"
						label="Content Type"
						options={contentTypeOptions}
						value={contentType}
						onChange={setContentType}
					/>
				) : (
					<FlexLayout>
						<Button
							disabled={disabled}
							variant="secondary"
							onClick={handleResetContent}>
							Reset
						</Button>
						<Button disabled={disabled} onClick={handleUpdateContent}>
							Update
						</Button>
					</FlexLayout>
				)}
			</FlexLayout>
			<FileInput
				id="upload-file"
				label="Upload File"
				onChange={handleUploadFile}
			/>
			{showPreview ? (
				<Card
					as={contentType === 'text' ? 'pre' : undefined}
					sx={contentStyles}>
					<Document
						annotations={annotations}
						content={content}
						contentType={contentType}
					/>
				</Card>
			) : (
				<Textarea
					rows={50}
					sx={contentStyles}
					value={content}
					onChange={handleEditContent}
				/>
			)}
		</FlexLayout>
	);
}
