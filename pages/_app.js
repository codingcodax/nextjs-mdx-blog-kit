import { ChakraProvider } from '@chakra-ui/react';
import { DefaultSeo } from 'next-seo';

import SEO from '../next-seo.config';

import '@fontsource/poppins/400.css';
import theme from '@/styles/theme';

import Layout from '@/components/layout';

const MyApp = ({ Component, pageProps }) => {
	return (
		<ChakraProvider resetCSS theme={theme}>
			<Layout>
				<DefaultSeo {...SEO} />
				<Component {...pageProps} />
			</Layout>
		</ChakraProvider>
	);
};

export default MyApp;
