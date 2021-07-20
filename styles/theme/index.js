const { extendTheme } = require('@chakra-ui/react');

// Color mode config overrides
import config from './config';

// Global styles overrides
import styles from './styles';

// Foundational style overrides
import fonts from './foundations/fonts';

// Component style overrides

const overrides = { config, styles, fonts, components: {} };

const theme = extendTheme(overrides);

export default theme;
