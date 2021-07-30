import Image from 'next/image';
import { Center, Grid, Heading, useColorMode } from '@chakra-ui/react';

import useColorModeValues from '@/hooks/useColorModeValues';

import config from '../../../config';

import CodePencil from '../../../public/images/3d-code-pencil.webp';

const { name, career } = config;

const Hero = () => {
	const { colorMode } = useColorMode();
	const { headingPrimaryColor } = useColorModeValues();

	return (
		<Grid templateColumns='1fr 1fr' columnGap={6}>
			<Center>
				<Heading
					as='h1'
					w='100%'
					color={headingPrimaryColor}
					fontSize={40}
					lineHeight={1.3}
				>
					Hi there,
					<br />
					{`I'm ${name} a`}
					<br />
					{`${career}`}
				</Heading>
			</Center>
			<Center
				filter={
					colorMode === 'light'
						? null
						: 'contrast(1.1) brightness(0.7) saturate(1.2)'
				}
			>
				<Image
					src={CodePencil}
					height='704'
					width='968'
					alt='code pencil'
				/>
			</Center>
		</Grid>
	);
};

export default Hero;
