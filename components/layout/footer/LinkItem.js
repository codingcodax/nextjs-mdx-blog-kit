import Link from '@/components/Link';
import { VStack } from '@chakra-ui/react';

const LinkItem = ({ href, children, ...props }) => {
	return (
		<VStack as='li'>
			<Link href={href} {...props}>
				{children}
			</Link>
		</VStack>
	);
};

export default LinkItem;
