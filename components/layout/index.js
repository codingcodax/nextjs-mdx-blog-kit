import Header from './header/Header';
import Footer from './footer/index.js';

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
