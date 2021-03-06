import { MDXRemote } from 'next-mdx-remote';

import { getPostBySlug, getPosts } from '@/utils/mdx';
import { Box, Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import { pageContainer } from '@/utils/animations';

import Seo from '@/components/Seo';
import Image from '@/components/pages/blog/Image';
import Author from '@/components/pages/blog/Author';
import MDXComponents from '@/components/MDXComponents';
import ScrollProgress from '@/components/pages/blog/ScrollProgress';

const BoxFramer = motion(Box);

export const getStaticPaths = async () => {
	const posts = await getPosts();
	const paths = posts.map((p) => ({
		params: { slug: p.replace(/\.mdx/, '') },
	}));

	return { paths, fallback: false };
};

export const getStaticProps = async ({ params: { slug } }) => {
	const { mdxSource, frontMatter } = await getPostBySlug(slug);

	return { props: { mdxSource, frontMatter, slug } };
};

const BlogPost = ({ mdxSource, frontMatter, slug }) => {
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
			<Seo name={frontMatter.title} path={`/${slug}`} />

			<Image
				src={frontMatter.image}
				blurDataURL={frontMatter.imageBlur}
				alt={frontMatter.title}
				height='400'
				width='800'
			/>

			<Heading as='h1' mt={2} fontSize={40}>
				{frontMatter.title}
			</Heading>

			<Author
				publishedAt={frontMatter.publishedAt}
				readingTime={frontMatter.readingTime}
			/>

			<Box as='section' mt={20}>
				<ScrollProgress />

				<MDXRemote {...mdxSource} components={MDXComponents} />
			</Box>
		</BoxFramer>
	);
};

export default BlogPost;
