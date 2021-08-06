import { useMediaQuery } from '@chakra-ui/react';

const useMediaQueries = () => {
	const [isMobileSize] = useMediaQuery('(max-width: 479px)');
	const [isMediumSize] = useMediaQuery('(min-width: 768px)');
	const [isExtraLargeSize] = useMediaQuery('(min-width: 1200px)');

	return { isMobileSize, isMediumSize, isExtraLargeSize };
};

export default useMediaQueries;
