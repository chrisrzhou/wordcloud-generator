import { useEffect } from 'react';

export function useClickOutside(ref, callback) {
	useEffect(() => {
		function handleClick(event) {
			if (ref.current && !ref.current.contains(event.target)) {
				callback();
			}
		}

		document.addEventListener('click', handleClick);
		return () => {
			document.removeEventListener('click', handleClick);
		};
	}, [callback, ref]);
}

export function useEscape(callback) {
	useEffect(() => {
		function handleEscape({ key }) {
			if (key === 'Escape') {
				callback();
			}
		}

		document.addEventListener('keydown', handleEscape);
		return () => {
			document.removeEventListener('keydown', handleEscape);
		};
	}, [callback]);
}

export function useDisableDocumentScroll(shouldDisable) {
	useEffect(() => {
		document.body.style.overflow = shouldDisable ? 'hidden' : 'unset';
	}, [shouldDisable]);
}
