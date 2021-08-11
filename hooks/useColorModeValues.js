import { useColorModeValue } from '@chakra-ui/color-mode';

const useColorModeValues = () => {
	const headingPrimaryColor = useColorModeValue('neutral.800', 'neutral.100');
	const headingSecondaryColor = useColorModeValue(
		'neutral.600',
		'neutral.300'
	);
	const textColor = useColorModeValue('neutral.700', 'neutral.200');
	const grayColor = useColorModeValue('neutral.500', 'neutral.400');

	/* ──────────────────────── Glass ─────────────────────── */
	const glassBgOne = useColorModeValue('#fff9', '#0009');
	const glassBgTwo = useColorModeValue('#ffffff4d', '#0000004d');
	const glassBoxShadow = useColorModeValue('#fff3', '#0003');
	const glassBorder = useColorModeValue('#fffc', '#000c');

	/* ──────────────────── Progress Bar ──────────────────── */
	const progressBgOne = useColorModeValue('#0009', '#fff9');
	const progressBgTwo = useColorModeValue('#0000004d', '#ffffff4d');

	const successColor = useColorModeValue(
		'accent.successDark',
		'accent.successLight'
	);

	const errorColor = useColorModeValue(
		'accent.errorDark',
		'accent.errorLight'
	);

	return {
		headingPrimaryColor,
		headingSecondaryColor,
		textColor,
		grayColor,
		glassBgOne,
		glassBgTwo,
		glassBoxShadow,
		glassBorder,
		successColor,
		errorColor,
		progressBgOne,
		progressBgTwo,
	};
};

export default useColorModeValues;
