const styles = {
	global: ({ colorMode }) => ({
		body: {
			bg:
				colorMode === 'light'
					? 'linear-gradient(270deg, #EEACFF 0%, #B6F2FF 100%);'
					: 'linear-gradient(270deg, #5D1470 0%, #0B5F71 100%);',
			color: colorMode === 'light' ? 'neutral.700' : 'neutral.200',
		},
		'#__next': {
			p: { base: '0.5rem', sm: '2rem' },
			mx: 'auto',
			minH: '100vh',
			maxW: '1200px',
			display: 'grid',
			gridTemplate: '1fr auto / 1fr',
		},
	}),
};

export default styles;
