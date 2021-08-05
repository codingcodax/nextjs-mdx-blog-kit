import { Box, Heading } from '@chakra-ui/react';

import AboutText from '@/components/pages/about/AboutText';
import Contact from '@/components/pages/about/contact';

const About = () => {
	return (
		<Box mt={48} mx='auto' w='100%' maxW='container.sm'>
			<Heading as='h1' mt={2} fontSize={40}>
				About
			</Heading>
			<AboutText />

			<Contact />
		</Box>
	);
};

export default About;
