import { VStack } from '@chakra-ui/react';

import Link from '@/components/Link';
import useColorModeValues from '@/hooks/useColorModeValues';

const NavItem = ({ href, children }) => {
	const { headingSecondaryColor } = useColorModeValues();

	return (
		<VStack as='li' listStyleType='none'>
			<Link
				href={href}
				color={headingSecondaryColor}
				textTransform='uppercase'
				fontSize='sm'
				fontWeight='500'
			>
				{children}
			</Link>
		</VStack>
	);
};

export default NavItem;
