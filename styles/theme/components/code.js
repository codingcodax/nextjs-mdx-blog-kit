const Code = {
	baseStyle: ({ colorMode }) => ({
		bgColor: `${
			colorMode === 'light' ? '#ffffff4d' : '#0000004d'
		}  !important`,
		backdropFilter: 'blur(40px)',
		borderRadius: 'md',
		border: `1px solid ${colorMode === 'light' ? '#fffc' : '#000c'}`,
	}),
};

export default Code;
