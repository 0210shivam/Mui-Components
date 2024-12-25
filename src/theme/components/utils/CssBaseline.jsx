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
         background: 'linear-gradient(140deg, rgba(238, 154, 247, 0.14) 0%, rgba(246, 115, 115, 0.01) 100%)',
         // background: `url(${BgImage}) no-repeat center center fixed`,
         ...scrollbar(theme),
      },
   }),
};

export default CssBaseline;
