import { Box, Text } from '@chakra-ui/react';

const ContactText = () => {
	return (
		<Box>
			<Text>
				If you have any questions, opportunities or would just like to
				say hey then feel free to fill out my contact form and {"I'll"}{' '}
				endeavour to get back to you as soon as I can.
			</Text>

			<Text mt={3}>
				Or if you would prefer to, you can also reach me on my socials
				network.
			</Text>
		</Box>
	);
};

export default ContactText;
