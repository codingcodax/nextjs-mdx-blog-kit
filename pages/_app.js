import { ChakraProvider } from '@chakra-ui/react';
import { DefaultSeo } from 'next-seo';

import SEO from '../next-seo.config';

import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import theme from '@/styles/theme';

import Layout from '@/components/layout';
import Head from '@/components/Head';

const MyApp = ({ Component, pageProps }) => {
	return (
		<ChakraProvider resetCSS theme={theme}>
			<Layout>
				<Head />
				<DefaultSeo {...SEO} />
				<Component {...pageProps} />
			</Layout>
		</ChakraProvider>
	);
};

export default MyApp;
