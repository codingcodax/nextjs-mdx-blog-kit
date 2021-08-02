import { Button, Flex, Text, useColorMode } from '@chakra-ui/react';

import useColorModeValues from '@/hooks/useColorModeValues';

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
		<Flex
			py={{ base: 2, sm: 4 }}
			px={{ base: 2.5, sm: 5 }}
			mt={48}
			align='center'
			justify='space-between'
			bg={`linear-gradient(90.89deg, ${glassBgOne} 25.56%, ${glassBgTwo} 62.83%);`}
			boxShadow={`0px 4px 24px -1px ${glassBoxShadow};`}
			borderRadius='20px'
			border={`1px solid ${glassBorder}`}
		>
			<Text
				fontSize='sm'
				textTransform='capitalize'
				color={headingSecondaryColor}
			>
				Made with love by ❤️ Codax
			</Text>
			<Button onClick={toggleColorMode}>
				{colorMode === 'light'
					? 'Toggle dark mode'
					: 'Toggle light Mode'}
			</Button>
			<Text
				fontSize='sm'
				textTransform='capitalize'
				color={headingSecondaryColor}
			>
				Copyright © 2021 Alexis Guzman
			</Text>
		</Flex>
	);
};

export default Footer;
