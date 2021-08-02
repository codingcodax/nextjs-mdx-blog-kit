import { Flex } from '@chakra-ui/react';

import useColorModeValues from '@/hooks/useColorModeValues';

import Avatar from '../../Avatar';
import Nav from './Nav';

const Header = () => {
	const { glassBgOne, glassBgTwo, glassBoxShadow, glassBorder } =
		useColorModeValues();

	return (
		<Flex
			as='header'
			py={{ base: 2, sm: 4 }}
			px={{ base: 2.5, sm: 5 }}
			w={{ base: 'calc(100vw - 1rem)', sm: 'calc(100vw - 4rem)' }}
			maxW='calc(1200px - 64px)'
			justify='space-between'
			position='fixed'
			bg={`linear-gradient(90.89deg, ${glassBgOne} 25.56%, ${glassBgTwo} 62.83%);`}
			boxShadow={`0px 4px 24px -1px ${glassBoxShadow};`}
			backdropFilter='blur(40px)'
			borderRadius='20px'
			border={`1px solid ${glassBorder}`}
			zIndex='10'
		>
			<Avatar />
			<Nav />
		</Flex>
	);
};

export default Header;
