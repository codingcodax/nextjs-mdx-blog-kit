import Image from 'next/image';
import { Center, Grid, Heading, useColorMode } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import useMediaQueries from '@/hooks/useMediaQueries';

import config from '../../../config';

import CodePencil from '../../../public/images/3d-code-pencil.webp';

const { name, career } = config;

const CenterHeadingFramer = motion(Center);
const CenterImageFramer = motion(Center);

const Hero = () => {
	const { colorMode } = useColorMode();
	const { isMediumSize } = useMediaQueries();

	return (
		<Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} columnGap={6}>
			<CenterHeadingFramer
				initial={{ y: 50, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
			>
				<Heading as='h1' w='100%' fontSize={40} lineHeight={1.3}>
					Hi there,
					<br />
					{`I'm ${name} a`}
					<br />
					{`${career}`}
				</Heading>
			</CenterHeadingFramer>
			{isMediumSize && (
				<CenterImageFramer
					filter={
						colorMode === 'light'
							? null
							: 'contrast(1.1) brightness(0.7) saturate(1.2)'
					}
					initial={{ y: -50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
				>
					<Image
						src={CodePencil}
						height='704'
						width='968'
						alt='code pencil'
					/>
				</CenterImageFramer>
			)}
		</Grid>
	);
};

export default Hero;
