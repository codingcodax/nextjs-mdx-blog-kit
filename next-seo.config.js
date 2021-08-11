import config from './config';

const {
	seo: { title, description },
} = config;

const SEO = {
	title,
	description,
	canonical: 'https://nextjs-mdx-blog-kit-nu.vercel.app/',
	openGraph: {
		type: 'website',
		locale: 'en_IE',
		url: 'https://nextjs-mdx-blog-kit-nu.vercel.app/',
		title,
		description,
		images: [
			{
				url: 'https://fastfeedback.io/og.png',
				alt: title,
				width: 1280,
				height: 720,
			},
		],
	},
	twitter: {
		handle: '@__codax__',
		site: '@__codax__',
		cardType: 'summary_large_image',
	},
};

export default SEO;
