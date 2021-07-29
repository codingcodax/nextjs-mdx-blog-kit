import Image from 'next/image';
import { Box, Grid, Heading, Text } from '@chakra-ui/react';

import Link from './Link';

const BlogPost = ({ slug, image, imageBlur, publishedAt, title, summary }) => {
	return (
		<Link
			href={`/blog/${slug}`}
			w='100%'
			_hover={{ textDecoration: 'none' }}
		>
			<Grid templateColumns='auto 1fr' columnGap={5}>
				<Box h='160px' w='160px' borderRadius='lg' overflow='hidden'>
					<Image
						src={
							image ||
							'https://via.placeholder.com/160x160?text=cover+image'
						}
						alt={title}
						height='160'
						width='160'
					/>
				</Box>

				<Box>
					<Text as='span' mb={2} fontSize='xs' color='#D1D1D1'>
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
					<Text color='#F1F1F1'>{summary}</Text>
				</Box>
			</Grid>
		</Link>
	);
};

export default BlogPost;
