import Image from 'next/image';
import { Button, HStack } from '@chakra-ui/react';

import useColorModeValues from '@/hooks/useColorModeValues';
import categories from '@/data/categories';

const BrowseByCategory = ({ category, setCategory }) => {
	const { glassBgOne, glassBgTwo, glassBoxShadow, glassBorder } =
		useColorModeValues();

	const handleClick = (e) => {
		const buttonCategory = e.target.id;

		if (category === buttonCategory) setCategory('');
		else setCategory(buttonCategory);
	};

	return (
		<HStack mt={20} spacing={8}>
			{categories.map(({ name, icon }) => (
				<Button
					key={name}
					id={name}
					onClick={handleClick}
					p={0}
					h='70px'
					w='70px'
					bg={`linear-gradient(90.89deg, ${glassBgOne} 25.56%, ${glassBgTwo} 62.83%);`}
					boxShadow={`0px 4px 24px -1px ${glassBoxShadow};`}
					borderRadius='20px'
					border={`1px solid ${glassBorder}`}
					transform={`scale(${category === name ? '1.1' : '1'})`}
					opacity={category === name || !category ? 1 : 0.7}
					_hover={{ filter: 'brightness(0.9)' }}
				>
					<Image src={icon} height='40' width='40' alt='icon' />
				</Button>
			))}
		</HStack>
	);
};

export default BrowseByCategory;
