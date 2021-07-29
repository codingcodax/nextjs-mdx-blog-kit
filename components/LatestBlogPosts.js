import { Box, Heading, VStack } from '@chakra-ui/react';

import BlogPost from './BlogPost';

const LatestBlogPosts = ({ posts }) => {
	const sortedBlogPosts = posts.sort(
		(a, b) =>
			Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
	);

	return (
		<Box mt={24} mx='auto' maxW='1000px'>
			<Heading as='h2' size='md' mb={5} color='#EAEAEA' fontWeight='500'>
				Latest
			</Heading>

			<VStack spacing={10}>
				{sortedBlogPosts.map((blogPost) => (
					<BlogPost key={blogPost.title} {...blogPost} />
				))}
			</VStack>
		</Box>
	);
};

export default LatestBlogPosts;
