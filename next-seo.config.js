import config from './config';

const {
	domain,
	seo: { title, description },
} = config;

const SEO = {
	title,
	description,
	canonical: `${domain}/`,
	openGraph: {
		type: 'website',
		locale: 'en_IE',
		url: `${domain}/`,
		title,
		description,
		images: [
			{
				url: `${domain}/images/og.png`,
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
