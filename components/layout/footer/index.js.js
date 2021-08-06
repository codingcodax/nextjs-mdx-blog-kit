import { Button, Grid, Text, useColorMode, VStack } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

import useColorModeValues from '@/hooks/useColorModeValues';

import MainRoutes from './MainRoutes';
import Socials from './Socials';

const Footer = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const {
		headingSecondaryColor,
		glassBgOne,
		glassBgTwo,
		glassBoxShadow,
		glassBorder,
	} = useColorModeValues();

	return (
		<VStack
			spacing={4}
			py={{ base: 2, sm: 4 }}
			px={{ base: 2.5, sm: 5 }}
			mt={48}
			bg={`linear-gradient(90.89deg, ${glassBgOne} 25.56%, ${glassBgTwo} 62.83%);`}
			boxShadow={`0px 4px 24px -1px ${glassBoxShadow};`}
			borderRadius='20px'
			border={`1px solid ${glassBorder}`}
		>
			<Grid w='100%' templateColumns='1fr 1fr'>
				<MainRoutes />
				<Socials />
			</Grid>
			<Button w='auto' onClick={toggleColorMode} bg='transparent'>
				{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
			</Button>
			<Text
				fontSize='sm'
				textTransform='capitalize'
				textAlign='center'
				color={headingSecondaryColor}
			>
				Copyright © 2021 Alexis Guzman
			</Text>
		</VStack>
	);
};

export default Footer;
