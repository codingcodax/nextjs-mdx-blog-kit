/* eslint-disable react/display-name */
import Image from 'next/image';
import {
	Code,
	Divider,
	Heading,
	ListItem,
	OrderedList,
	Text,
	UnorderedList,
} from '@chakra-ui/react';
import Link from './Link';

const MDXComponents = {
	h1: (props) => <Heading as='h1' size='xl' mt={8} mb={3} {...props} />,
	h2: (props) => <Heading as='h2' size='lg' mt={8} mb={3} {...props} />,
	h3: (props) => <Heading as='h3' size='md' mt={8} mb={3} {...props} />,
	h4: (props) => <Heading as='h4' size='sm' mt={8} mb={3} {...props} />,
	h5: (props) => <Heading as='h5' size='sm' mt={8} mb={3} {...props} />,
	h6: (props) => <Heading as='h6' size='xs' mt={8} mb={3} {...props} />,
	p: (props) => <Text mb={2} lineHeight={6} {...props} />,
	a: (props) => <Link {...props} />,
	ul: (props) => <UnorderedList pl={4} mb={4} {...props} />,
	ol: (props) => <OrderedList pl={4} mb={4} {...props} />,
	li: (props) => <ListItem {...props} />,
	inlineCode: (props) => <Code {...props} />,
	hr: (props) => <Divider mt={14} mb={10} {...props} />,
	Image,
};

export default MDXComponents;
