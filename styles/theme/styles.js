const styles = {
	global: ({ colorMode }) => ({
		body: {
			bg:
				colorMode === 'light'
					? 'linear-gradient(270deg, #EEACFF 0%, #B6F2FF 100%);'
					: 'linear-gradient(270deg, #5D1470 0%, #0B5F71 100%);',
		},
		'#__next': {
			minH: '100vh',
		},
	}),
};

export default styles;
