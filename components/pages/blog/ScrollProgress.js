import { Box } from '@chakra-ui/react';
import { motion, useViewportScroll } from 'framer-motion';

import useColorModeValues from '@/hooks/useColorModeValues';

const BoxContainerFramer = motion(Box);
const BoxItemFramer = motion(Box);

const ScrollProgress = () => {
	const { scrollYProgress } = useViewportScroll();
	const { progressBgOne, progressBgTwo } = useColorModeValues();

	return (
		<Box
			className='wrapper'
			h='5px'
			w='100%'
			position='fixed'
			top='0'
			left='0'
		>
			<BoxContainerFramer
				h='100%'
				w='100%'
				overflow='hidden'
				background={progressBgTwo}
				className='container'
			>
				<BoxItemFramer
					h='inherit'
					w='inherit'
					backgroundColor={progressBgOne}
					transformOrigin='0% 100%'
					className='item'
					style={{
						scaleX: scrollYProgress,
					}}
				/>
			</BoxContainerFramer>
		</Box>
	);
};

export default ScrollProgress;
