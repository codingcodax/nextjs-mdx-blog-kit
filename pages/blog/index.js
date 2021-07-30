import { useState } from 'react';
import { Box, Heading } from '@chakra-ui/react';

import useColorModeValues from '@/hooks/useColorModeValues';

import { getPostsFrontMatter } from '@/utils/mdx';

import SearchBar from '@/components/pages/blog/SearchBar';
import BlogPosts from '@/components/BlogPosts';

export const getStaticProps = async () => {
	const posts = await getPostsFrontMatter();

	return { props: { posts } };
};

const Blog = ({ posts }) => {
	const { headingPrimaryColor } = useColorModeValues();
	const [searchValue, setSearchValue] = useState('');
	const filteredBlogPosts = posts
		.sort(
			(a, b) =>
				Number(new Date(b.publishedAt)) -
				Number(new Date(a.publishedAt))
		)
		.filter((frontMatter) =>
			frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
		);

	return (
		<Box mt={48} mx='auto' w='100%' maxW='1000px'>
			<Heading as='h1' color={headingPrimaryColor} fontSize={40}>
				Blog Posts
			</Heading>

			<SearchBar
				value={searchValue}
				handleChange={(e) => setSearchValue(e.target.value)}
			/>

			<BlogPosts
				title={searchValue.length > 0 ? 'Results' : 'Latest'}
				posts={filteredBlogPosts}
			/>
		</Box>
	);
};

export default Blog;
