import { VStack } from '@chakra-ui/react';

import Link from '@/components/Link';

const NavItem = ({ href, children }) => {
	return (
		<VStack as='li' listStyleType='none'>
			<Link href={href}>{children}</Link>
		</VStack>
	);
};

export default NavItem;
