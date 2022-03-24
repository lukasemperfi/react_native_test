import { useRef, useEffect } from 'react';

export const useDidMount = () => {
	const isMounted = useRef<boolean>(true);

	useEffect(() => {
		isMounted.current = false;
	}, []);

	return isMounted.current;
};