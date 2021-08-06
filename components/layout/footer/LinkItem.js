import Link from '@/components/Link';
import { VStack } from '@chakra-ui/react';

const LinkItem = ({ href, children }) => {
	return (
		<VStack as='li'>
			<Link href={href}>{children}</Link>
		</VStack>
	);
};

export default LinkItem;
