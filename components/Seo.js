import { NextSeo } from 'next-seo';

const Seo = ({ name, path }) => {
	const title = `${name} | Alexis Guzman`;
	const url = `https://codaxx.ml${path}`;

	return (
		<NextSeo
			title={title}
			canonical={url}
			openGraph={{
				url,
				title,
			}}
		/>
	);
};

export default Seo;
