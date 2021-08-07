import { useState } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import { getPostsFrontMatter } from '@/utils/mdx';

import Seo from '@/components/Seo';
import SearchBar from '@/components/pages/blog/SearchBar';
import BrowseByCategory from '@/components/pages/home/BrowseByCategory';
import BlogPosts from '@/components/BlogPosts';
import { pageContainer } from '@/utils/animations';

const BoxFramer = motion(Box);

export const getStaticProps = async () => {
	const posts = await getPostsFrontMatter();

	return { props: { posts } };
};

const Blog = ({ posts }) => {
	const [searchValue, setSearchValue] = useState('');
	const [category, setCategory] = useState('');
	const filteredBlogPosts = posts
		.sort(
			(a, b) =>
				Number(new Date(b.publishedAt)) -
				Number(new Date(a.publishedAt))
		)
		.filter((frontMatter) =>
			frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
		)
		.filter((frontMatter) =>
			frontMatter.category.toLowerCase().includes(category.toLowerCase())
		);

	return (
		<BoxFramer
			mt={48}
			mx='auto'
			w='100%'
			maxW='1000px'
			variants={pageContainer}
			initial='hidden'
			animate='show'
		>
			<Seo name='blog' path='/blog' />

			<Heading as='h1' fontSize={40}>
				Blog Posts
			</Heading>

			<SearchBar
				value={searchValue}
				handleChange={(e) => setSearchValue(e.target.value)}
			/>

			<BrowseByCategory category={category} setCategory={setCategory} />

			<BlogPosts
				title={searchValue || category ? 'Results' : 'Latest'}
				posts={filteredBlogPosts}
			/>

			{!filteredBlogPosts.length && <Text>Not Posts Found</Text>}
		</BoxFramer>
	);
};

export default Blog;
