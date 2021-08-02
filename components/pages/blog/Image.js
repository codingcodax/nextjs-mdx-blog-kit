import NextImage from 'next/image';

const Image = ({ src, blurDataURL, title, height, width }) => {
	return blurDataURL ? (
		<NextImage
			src={src}
			placeholder='blur'
			blurDataURL={blurDataURL}
			alt={title}
			height={height}
			width={width}
		/>
	) : (
		<NextImage src={src} alt={title} height={height} width={width} />
	);
};

export default Image;
