import { Box, Heading, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import useColorModeValues from '@/hooks/useColorModeValues';

import BlogPost from './BlogPost';

const BoxFramer = motion(Box);

const BlogPosts = ({ title, posts }) => {
	const { headingSecondaryColor } = useColorModeValues();

	return (
		<BoxFramer
			mt={24}
			mx='auto'
			maxW='1000px'
			initial={{ opacity: 0, y: 50 }}
			animate={{ y: 0, opacity: 1, transition: { delay: 0.5 } }}
		>
			<Heading
				as='h2'
				size='md'
				mb={5}
				color={headingSecondaryColor}
				fontWeight='500'
			>
				{title}
			</Heading>

			<VStack spacing={10}>
				{posts.map((blogPost) => (
					<BlogPost key={blogPost.title} {...blogPost} />
				))}
			</VStack>
		</BoxFramer>
	);
};

export default BlogPosts;
