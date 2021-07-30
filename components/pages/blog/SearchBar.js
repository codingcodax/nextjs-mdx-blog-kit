import { Input, InputGroup } from '@chakra-ui/react';

import useColorModeValues from '@/hooks/useColorModeValues';

const SearchBar = ({ value, handleChange }) => {
	const {
		textColor,
		grayColor,
		glassBgOne,
		glassBgTwo,
		glassBoxShadow,
		glassBorder,
	} = useColorModeValues();

	return (
		<InputGroup mt={5} maxW='container.sm'>
			<Input
				value={value}
				onChange={handleChange}
				color={textColor}
				_placeholder={{ color: grayColor }}
				bg={`linear-gradient(90.89deg, ${glassBgOne} 25.56%, ${glassBgTwo} 62.83%);`}
				boxShadow={`0px 4px 24px -1px ${glassBoxShadow};`}
				backdropFilter='blur(40px)'
				borderRadius='20px'
				border={`1px solid ${glassBorder}`}
				placeholder='Search articles'
			/>
		</InputGroup>
	);
};

export default SearchBar;
