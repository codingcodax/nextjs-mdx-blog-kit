import NextHead from 'next/head';

const Head = () => {
	return (
		<NextHead>
			<meta content='IE=edge' httpEquiv='X-UA-Compatible' />
			<meta
				content='width=device-width, initial-scale=1'
				name='viewport'
			/>
			<link href='/favicons/favicon.ico' rel='shortcut icon' />
			<link
				rel='apple-touch-icon'
				sizes='180x180'
				href='/favicons/apple-touch-icon.png'
			/>
			<link
				rel='icon'
				type='image/png'
				sizes='32x32'
				href='/favicons/favicon-32x32.png'
			/>
			<link
				rel='icon'
				type='image/png'
				sizes='16x16'
				href='/favicons/favicon-16x16.png'
			/>
			<link rel='manifest' href='/favicons/site.webmanifest' />
			<link
				rel='mask-icon'
				href='/favicons/safari-pinned-tab.svg'
				color='#805ad5'
			/>
			<meta name='msapplication-TileColor' content='#805ad5' />
			<meta name='theme-color' content='#805ad5' />
		</NextHead>
	);
};

export default Head;
