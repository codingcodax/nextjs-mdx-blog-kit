const Code = {
	baseStyle: ({ colorMode }) => ({
		bgColor: `${
			colorMode === 'light' ? '#ffffff4d' : '#0000004d'
		}  !important`,
		borderRadius: 'md',
		border: `1px solid ${colorMode === 'light' ? '#fffc' : '#000c'}`,
	}),
};

export default Code;
