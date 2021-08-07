import { ArrowForwardIcon } from '@chakra-ui/icons';

import useColorModeValues from '@/hooks/useColorModeValues';

import Link from '@/components/Link';

const SeeMore = () => {
	const { glassBgOne, glassBgTwo, glassBoxShadow, glassBorder } =
		useColorModeValues();

	return (
		<Link
			href='/blog'
			py={4}
			px={5}
			mt={10}
			w='100%'
			maxW='300px'
			display='block'
			bg={`linear-gradient(90.89deg, ${glassBgOne} 25.56%, ${glassBgTwo} 62.83%);`}
			boxShadow={`0px 4px 24px -1px ${glassBoxShadow};`}
			borderRadius='20px'
			border={`1px solid ${glassBorder}`}
			_hover={{ bgColor: glassBgTwo }}
		>
			See More <ArrowForwardIcon />
		</Link>
	);
};

export default SeeMore;
