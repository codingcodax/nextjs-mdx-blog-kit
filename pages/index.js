import { Box } from '@chakra-ui/react';

import { getPostsFrontMatter } from '@/utils/mdx';

import Hero from '@/components/pages/blog/Hero';
import LatestBlogPosts from '@/components/LatestBlogPosts';

export const getStaticProps = async () => {
	const posts = await getPostsFrontMatter();

	return { props: { posts } };
};

const Home = ({ posts }) => {
	return (
		<Box mt={48} mx='auto' maxW='1000px'>
			<Hero />
			<LatestBlogPosts posts={posts} />
		</Box>
	);
};

export default Home;
