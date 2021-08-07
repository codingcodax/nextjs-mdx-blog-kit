// import Image from 'next/image';
import { Box, Grid, Heading, Text } from '@chakra-ui/react';

import useColorModeValues from '@/hooks/useColorModeValues';

import Image from '@/components/pages/blog/Image';

import Link from './Link';

const BlogPost = ({ slug, image, imageBlur, publishedAt, title, summary }) => {
	const { grayColor } = useColorModeValues();

	return (
		<Link
			href={`/blog/${slug}`}
			w='100%'
			maxH='160px'
			overflow='hidden'
			_hover={{ textDecoration: 'none' }}
		>
			<Grid templateColumns='auto 1fr' columnGap={5}>
				<Box h='160px' w='160px' borderRadius='lg' overflow='hidden'>
					<Image
						src={
							image ||
							'https://via.placeholder.com/160x160?text=cover+image'
						}
						blurDataURL={imageBlur}
						alt={title}
						height='360'
						width='360'
					/>
				</Box>

				<Box>
					<Text as='span' mb={2} fontSize='xs' color={grayColor}>
						{publishedAt}
					</Text>
					<Heading
						as='h3'
						mb={3}
						fontSize='lg'
						textTransform='capitalize'
						fontWeight='500'
					>
						{title}
					</Heading>
					<Text noOfLines={[2, 3, 4]}>{summary}</Text>
				</Box>
			</Grid>
		</Link>
	);
};

export default BlogPost;
