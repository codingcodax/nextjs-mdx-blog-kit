import NextImage from 'next/image';

const Image = ({
	src,
	blurDataURL,
	title,
	height,
	width,
	objectFit = 'cover',
}) => {
	return blurDataURL ? (
		<NextImage
			src={src}
			placeholder='blur'
			blurDataURL={blurDataURL}
			alt={title}
			height={height}
			width={width}
			objectFit={objectFit}
		/>
	) : (
		<NextImage
			src={src}
			alt={title}
			height={height}
			width={width}
			objectFit={objectFit}
		/>
	);
};

export default Image;
