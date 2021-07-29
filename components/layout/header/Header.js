import { Flex } from '@chakra-ui/react';

import Avatar from './Avatar';
import Nav from './Nav';

const Header = () => {
	return (
		<Flex
			as='header'
			py={{ base: 2, sm: 4 }}
			px={{ base: 2.5, sm: 5 }}
			w={{ base: 'calc(100vw - 1rem)', sm: 'calc(100vw - 4rem)' }}
			maxW='calc(1200px - 64px)'
			bg='linear-gradient(90.89deg, rgba(0, 0, 0, 0.6) 25.56%, rgba(0, 0, 0, 0.3) 62.83%);'
			boxShadow='0px 4px 24px -1px rgba(0, 0, 0, 0.2);'
			backdropFilter='blur(40px)'
			borderRadius='20px'
			justify='space-between'
			position='fixed'
			border='1px solid rgba(0, 0, 0, 0.8)'
			zIndex='10'
		>
			<Avatar />
			<Nav />
		</Flex>
	);
};

export default Header;
