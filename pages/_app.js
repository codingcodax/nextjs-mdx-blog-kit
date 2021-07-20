import { ChakraProvider } from '@chakra-ui/react';

import '@fontsource/poppins/400.css';

import theme from '@/styles/theme';

const MyApp = ({ Component, pageProps }) => {
	return (
		<ChakraProvider resetCSS theme={theme}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
};

export default MyApp;
