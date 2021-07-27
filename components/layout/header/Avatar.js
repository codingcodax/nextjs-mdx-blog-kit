import Image from 'next/image';
import { Center } from '@chakra-ui/react';

const Avatar = () => {
	return (
		<Center
			h={12}
			w={12}
			position='relative'
			borderRadius='50%'
			bgImage='linear-gradient(8.88deg, #CC00FF 6.76%, #006CFF 93.24%)'
		>
			<Center borderRadius='50%' overflow='hidden'>
				<Image
					src='https://avatars.githubusercontent.com/u/1250789?v=4'
					height='46'
					width='46'
					alt='avatar'
				/>
			</Center>
		</Center>
	);
};

export default Avatar;
