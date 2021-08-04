import { readdirSync, readFileSync } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { serialize } from 'next-mdx-remote/serialize';
import mdxPrism from 'mdx-prism';

const POSTS_PATH = path.join(process.cwd(), 'data/blog');

export const getPosts = async () => readdirSync(POSTS_PATH);

export const getPostBySlug = async (slug) => {
	const source = readFileSync(`${POSTS_PATH}/${slug}.mdx`, 'utf8');

	const { data, content } = matter(source);
	const mdxSource = await serialize(content, {
		mdxOptions: {
			remarkPlugins: [
				require('remark-slug'),
				[
					require('remark-autolink-headings'),
					{
						linkProperties: {
							className: ['anchor'],
						},
					},
				],
				require('remark-code-titles'),
			],
			rehypePlugins: [mdxPrism],
		},
	});

	return {
		mdxSource,
		frontMatter: {
			wordCount: content.split(/\s+/gu).length,
			readingTime: readingTime(content),
			title: data.title,
			publishedAt: data.publishedAt || '-- -- --',
			summary: data.summary || '',
			image:
				data.image ||
				'https://via.placeholder.com/800x400?text=cover+image',
			imageBlur:
				data.imageBlur ||
				'https://via.placeholder.com/800x400?text=cover+image',
		},
	};
};

export const getPostsFrontMatter = async () => {
	const files = await getPosts();

	return files.reduce((allPosts, postSlug) => {
		const source = readFileSync(`${POSTS_PATH}/${postSlug}`, 'utf8');
		const { data } = matter(source);

		return [
			{
				...data,
				slug: postSlug.replace('.mdx', ''),
			},
			...allPosts,
		];
	}, []);
};
