const name = 'Alexis Guzman';
const career = 'Front-end Developer';
export const github = 'https://github.com/a12989x/';
export const twitter = 'https://twitter.com/__codax__';
export const linkedin = 'https://www.linkedin.com/in/codax/';

const config = {
	name,
	career,
	domain: 'https://nextjs-mdx-blog-kit-nu.vercel.app',
	avatar: 'https://avatars.githubusercontent.com/u/48135533?v=4',
	seo: {
		title: `${name} – ${career}`,
		description:
			'Freelance font-end web developer focused on building scalable, maintainable and accessible solutions on the web.',
	},
	blurEffect: '10px',
	socials: [
		{ title: 'GitHub', url: github },
		{ title: 'Twitter', url: twitter },
		{ title: 'Linkedin', url: linkedin },
	],
};

export default config;
