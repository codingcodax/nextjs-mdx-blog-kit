const mdx = (colorMode) => ({
	pre: {
		p: 4,
		mt: 3,
		mb: 4,
		w: '100%',
		maxW: { base: 'calc(100vw - 1rem)', sm: 'calc(100vw - 4rem)' },
		overflowX: 'auto',
		fontSize: '.875rem',
		lineHeight: '1.7142857',
		bg: `linear-gradient(90.89deg, ${
			colorMode === 'light' ? '#fff9' : '#0009'
		} 25.56%, ${
			colorMode === 'light' ? '#ffffff4d' : '#0000004d'
		} 62.83%);`,
		boxShadow: `0px 4px 24px -1px ${
			colorMode === 'light' ? '#fff3' : '#0003'
		};`,
		border: `1px solid ${colorMode === 'light' ? '#fffc' : '#000c'}`,
		borderRadius: '20px',
	},
	'pre::-webkit-scrollbar': { display: 'none' },
	"pre[class*='language-']": {
		color: colorMode === 'light' ? 'neutral.700' : 'neutral.200',
	},
	'.token.prolog, .token.comment, .token.doctype, .token.cdata, .token.punctuation':
		{
			color: colorMode === 'light' ? 'neutral.500' : 'neutral.400',
		},
	'.token.property, .token.tag, .token.boolean, .token.number, .token.constant, .token.symbol, .token.deleted':
		{ color: '#10b981' },
	'.token.selector, .token.attr-name, .token.string, .token.char, .token.builtin, .token.inserted':
		{ color: '#8b5cf6' },
	'.token.operator, .token.entity, .token.url, .language-css .token.string, .style .token.string':
		{
			color: '#f59e0b',
		},
	'.token.atrule, .token.attr-value, .token.keyword': {
		color: '#3b82f6',
	},
	'.token.function, .token.class-name': { color: '#ec4899' },
	'.token.regex, .token.important, .token.variable': { color: '#f59e0b' },
	'.remark-code-title': {
		py: '.75rem',
		px: '1.25rem',
		color: colorMode === 'light' ? 'neutral.800' : 'neutral.100',
		fontWeight: 'bold',
		bg: `linear-gradient(90.89deg, ${
			colorMode === 'light' ? '#fff9' : '#0009'
		} 25.56%, ${
			colorMode === 'light' ? '#ffffff4d' : '#0000004d'
		} 62.83%);`,
		boxShadow: `0px 4px 24px -1px ${
			colorMode === 'light' ? '#fff3' : '#0003'
		};`,
		borderTopRadius: '20px',
		border: `1px solid ${colorMode === 'light' ? '#fffc' : '#000c'}`,
		borderBottom: 'none',
	},
	'.remark-code-title + pre': { mt: 0, borderTopRadius: 'none' },
	'.mdx-marker': {
		px: '2px',
		mx: '-1rem',
		display: 'block',
		bg: colorMode === 'light' ? '#fff9' : '#0000004d',
		borderLeft: '3px solid',
		borderColor: colorMode === 'light' ? 'neutral.500' : 'neutral.400',
	},
	'.anchor': {
		position: 'absolute',
		pr: '0.5rem',
		ml: '0.5rem',
		w: '100%',
		maxW: 'container.sm',
		textDecoration: 'none !important',
		transform: 'translateX(-2.5rem)',
		opacity: 0,
	},
	'.anchor:after': {
		content: '"#"',
		color: colorMode === 'light' ? 'neutral.800' : 'neutral.100',
	},
	'.anchor:hover': { opacity: 1 },
});

export default mdx;
