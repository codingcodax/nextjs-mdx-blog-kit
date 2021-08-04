import { MDXRemote } from 'next-mdx-remote';

import { getPostBySlug, getPosts } from '@/utils/mdx';
import { Box, Heading } from '@chakra-ui/react';

import Seo from '@/components/Seo';
import Image from '@/components/pages/blog/Image';
import Author from '@/components/pages/blog/Author';
import MDXComponents from '@/components/MDXComponents';

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
		<Box mt={48} mx='auto' w='100%' maxW='container.sm'>
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
				<MDXRemote {...mdxSource} components={MDXComponents} />
			</Box>
		</Box>
	);
};

export default BlogPost;
