import { Box, Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import { pageContainer } from '@/utils/animations';

import AboutText from '@/components/pages/about/AboutText';
import Contact from '@/components/pages/about/contact';

const BoxFramer = motion(Box);

const About = () => {
	return (
		<BoxFramer
			mt={48}
			mx='auto'
			w='100%'
			maxW='container.sm'
			variants={pageContainer}
			initial='hidden'
			animate='show'
		>
			<Heading as='h1' mt={2} fontSize={40}>
				About
			</Heading>
			<AboutText />

			<Contact />
		</BoxFramer>
	);
};

export default About;
