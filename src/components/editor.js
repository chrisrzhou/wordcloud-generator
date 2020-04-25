import React, { useState } from 'react';
import { Box, Button, Input, Textarea } from 'theme-ui';

export default function Editor({ content: initialContent, onUpdate }) {
	const [content, setContent] = useState(initialContent);

	function handleUploadFile(event) {
		const file = event.target.files[0];
		file.text().then((fileContent) => {
			setContent(fileContent);
			onUpdate(fileContent);
		});
	}

	function handleEditContent(event) {
		setContent(event.target.value);
	}

	function handleResetContent() {
		setContent(initialContent);
	}

	function handleUpdateContent() {
		onUpdate(content);
	}

	const disabled = content === initialContent;

	return (
		<>
			<Textarea
				sx={{ flex: '1 1 auto', minHeight: 480 }}
				value={content}
				onChange={handleEditContent}
			/>
			<Box mt={3} sx={{ display: 'flex', justifyContent: 'space-between' }}>
				<Input type="file" onChange={handleUploadFile} />
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
			</Box>
		</>
	);
}
