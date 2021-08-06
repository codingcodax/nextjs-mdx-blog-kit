import { VStack } from '@chakra-ui/react';
import LinkItem from './LinkItem';

import config from '../../../config';

const { socials } = config;

const Socials = () => {
	return (
		<VStack as='ul' spacing={2} align='flex-end'>
			{socials.map(({ title, url }, index) => (
				<LinkItem key={index} href={url} isExternal>
					{title}
				</LinkItem>
			))}
		</VStack>
	);
};

export default Socials;
