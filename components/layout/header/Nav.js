import { HStack } from '@chakra-ui/react';

import NavItem from './NavItem';

const Nav = () => {
	return (
		<HStack as='nav'>
			<HStack as='ul' spacing={7}>
				<NavItem href='/'>Home</NavItem>
				<NavItem href='/blog'>Blog</NavItem>
				<NavItem href='/about'>About</NavItem>
			</HStack>
		</HStack>
	);
};

export default Nav;
