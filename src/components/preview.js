import React, { useEffect } from 'react';
import { Text } from 'theme-ui';

function getWordHash(word) {
	return `word--${word}`;
}

export default function Preview({ content, selectedWord }) {
	useEffect(() => {
		if (selectedWord) {
			window.location.hash = getWordHash(selectedWord);
		}
	}, [selectedWord]);

	let tokens;
	if (selectedWord) {
		const lowerCased = selectedWord.toLowerCase();
		tokens = content
			.split(new RegExp(`(${selectedWord})`, 'gi'))
			.map((token) =>
				lowerCased.includes(token.toLowerCase()) ? (
					<mark id={getWordHash(lowerCased)}>{token}</mark>
				) : (
					token
				),
			);
	}

	return (
		<Text sx={{ fontSize: 'm', whiteSpace: 'pre-wrap' }}>
			{selectedWord
				? tokens.map((token, i) => (
						<React.Fragment key={i.toString()}>{token}</React.Fragment>
				  ))
				: content}
		</Text>
	);
}
