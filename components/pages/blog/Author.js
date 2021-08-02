import { Divider, HStack, Text, VStack } from '@chakra-ui/react';
import { format } from 'date-fns';

import config from 'config';

import Avatar from '@/components/Avatar';

const { name } = config;

const Author = ({ publishedAt, readingTime }) => {
	console.log(format(new Date(publishedAt), 'MMM dd, yyyy'));

	return (
		<>
			<Divider my={8} />
			<HStack spacing={6}>
				<Avatar />
				<VStack spacing={0} align='start'>
					<Text fontSize='18px' fontWeight='500'>
						{name}
					</Text>
					<HStack>
						<Text>
							Published on{' '}
							{format(new Date(publishedAt), 'MMM dd, yyyy')}
						</Text>
						<Text>•</Text>
						<Text>{readingTime.text}</Text>
					</HStack>
				</VStack>
			</HStack>
			<Divider mt={8} />
		</>
	);
};

export default Author;
