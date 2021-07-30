import { Box } from '@chakra-ui/react';

import { getPostsFrontMatter } from '@/utils/mdx';

import Hero from '@/components/pages/blog/Hero';
import BlogPosts from '@/components/BlogPosts';

export const getStaticProps = async () => {
	const posts = await getPostsFrontMatter();

	return { props: { posts } };
};

const Home = ({ posts }) => {
	const sortedBlogPosts = posts.sort(
		(a, b) =>
			Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
	);

	return (
		<Box mt={48} mx='auto' maxW='1000px'>
			<Hero />
			<BlogPosts title='Latest' posts={sortedBlogPosts} />
		</Box>
	);
};

export default Home;
