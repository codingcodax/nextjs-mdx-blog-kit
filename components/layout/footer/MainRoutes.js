import { VStack } from '@chakra-ui/react';
import LinkItem from './LinkItem';

const MainRoutes = () => {
	return (
		<VStack as='ul' spacing={2} align='start'>
			<LinkItem href='/'>Home</LinkItem>
			<LinkItem href='/blog'>Blog</LinkItem>
			<LinkItem href='/about'>About</LinkItem>
		</VStack>
	);
};

export default MainRoutes;
