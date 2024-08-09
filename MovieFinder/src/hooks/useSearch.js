import { useEffect, useRef, useState } from "react";

export const useSearch = () => {
	const [query, setQuery] = useState('');
	const [error, setError] = useState(null);
	const isFirstInput = useRef(true);

	useEffect(() => {
		if (isFirstInput.current) {
			isFirstInput.current = query === '';
			return
		}

		if (query === '') {
			setError('No Empty Value');
			return
		}

		if (query.length < 2) {
			setError('Introduce at least 2 Characteres')
			return
		}

		setError(null)
	}, [query])

	return {
		query,
		setQuery,
		error
	}
}