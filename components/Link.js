import NextLink from 'next/link';
import { Link as ChakraLink } from '@chakra-ui/layout';

const Link = ({ href, children, ...props }) => {
	return (
		<NextLink href={href} passHref>
			<ChakraLink {...props}>{children}</ChakraLink>
		</NextLink>
	);
};

export default Link;
