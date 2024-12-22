import scrollbar from "../../styles/scrollbar";
import BgImage from '../../../assets/images/body-bg.jpg';

const CssBaseline = {
   defaultProps: {},
   styleOverrides: (theme) => ({
      '*, *::before, *::after': {
         margin: 0,
         padding: 0,
      },
      html: {
         scrollBehavior: 'smooth',
      },
      body: {
         fontVariantLigatures: 'none',
         background: `url(${BgImage}) no-repeat center center fixed`,
         ...scrollbar(theme),
      },
   }),
};

export default CssBaseline;
