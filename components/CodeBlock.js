import { useRef, useState } from 'react';
import { Box, Button } from '@chakra-ui/react';
import { CheckIcon, CopyIcon } from '@chakra-ui/icons';

const CodeBlock = ({ children }) => {
	const textRef = useRef(null);
	const copyFunction = () => {
		setCopy(true);
		navigator.clipboard.writeText(textRef.current.textContent);
		setTimeout(() => {
			setCopy(false);
		}, 500);
	};
	const [copy, setCopy] = useState(false);

	return (
		<Box position='relative'>
			<Button
				p={0}
				position='absolute'
				right='0'
				bgColor='transparent'
				_hover={{ bgColor: 'transparent' }}
				aria-label='Copy to Clipboard'
				onClick={() => copyFunction()}
			>
				{copy ? <CheckIcon /> : <CopyIcon />}
			</Button>
			<div ref={textRef}>{children}</div>
		</Box>
	);
};

export default CodeBlock;
