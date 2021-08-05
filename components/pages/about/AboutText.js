import { Heading, Text } from '@chakra-ui/react';

import config from '../../../config';

const { name, career } = config;

const AboutText = () => {
	return (
		<>
			<Text mt={20}>
				Hello world, {"I'm"} {name} a {career} exploring {"what's"}{' '}
				possible on the web.
			</Text>
			<Text mt={3}>
				I like to spend my time building projects that interest me, as
				well as pushing myself to learn more through open source
				projects and share my knowledge with other developers.
			</Text>

			<Heading as='h2' mt={10} fontSize='xl'>
				What {"I've"} been up to
			</Heading>
			<Text mt={3}>
				{"I've"} been recently focused on building React (specifically
				Next.js) applications, using popular tools such as Chakra UI and
				to help me bring my designs.
			</Text>

			<Heading as='h2' mt={10} fontSize='xl'>
				Interests
			</Heading>
			<Text mt={3}>
				{"I'm"} currently interested in building tools that help us make
				things faster and more efficient.
			</Text>
			<Text mt={3}>
				I’m also really into <em>Design Systems</em> and{' '}
				<em>Component Driven User Interfaces</em> and I love to explore
				the tools and techniques that help to create more scalable and
				maintainable
				{"UI's"}.
			</Text>
			<Text mt={3}>
				When {"I'm"} not coding (or writing or reading about it){' '}
				{"you'll"}
				typically find me engaging with another creative or engaging
				activity such as design, gaming, curating playlists, solving
				{"rubik's"} cube or getting lost in series!
			</Text>
			<Text mt={3}>
				Although I love to keep myself busy with activities, I make sure
				to set aside to going for walks and runs.
			</Text>
		</>
	);
};

export default AboutText;
