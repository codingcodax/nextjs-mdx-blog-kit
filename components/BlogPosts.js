import { Box, Heading, VStack } from '@chakra-ui/react';

import useColorModeValues from '@/hooks/useColorModeValues';

import BlogPost from './BlogPost';

const BlogPosts = ({ title, posts }) => {
	const { headingSecondaryColor } = useColorModeValues();

	return (
		<Box mt={24} mx='auto' maxW='1000px'>
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
		</Box>
	);
};

export default BlogPosts;
