import React from 'react';
import { CheckCircleIcon, WarningIcon } from '@chakra-ui/icons';
import { HStack, Text } from '@chakra-ui/layout';

import useColorModeValues from '@/hooks/useColorModeValues';

const SuccessMessage = ({ children, ...props }) => {
	const { successColor } = useColorModeValues();

	return (
		<HStack spacing={4} {...props}>
			<CheckCircleIcon color={successColor} />
			<Text color={successColor}>{children}</Text>
		</HStack>
	);
};

const ErrorMessage = ({ children, ...props }) => {
	const { errorColor } = useColorModeValues();

	return (
		<HStack spacing={2} {...props}>
			<WarningIcon color={errorColor} />
			<Text color={errorColor}>{children}</Text>
		</HStack>
	);
};

export { SuccessMessage, ErrorMessage };
