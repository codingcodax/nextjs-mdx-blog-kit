import { Box, Grid, Heading } from '@chakra-ui/react';

import ContactText from './ContactText';
import ContactForm from './ContactForm';

const Contact = () => {
	return (
		<Box mt={20}>
			<Heading as='h2' fontSize='xl'>
				Get In Touch
			</Heading>
			<Grid
				mt={3}
				templateColumns={{ base: '1fr', md: '1fr 1fr' }}
				gap={6}
			>
				<ContactText />
				<ContactForm />
			</Grid>
		</Box>
	);
};

export default Contact;
