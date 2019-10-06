import WebFont from 'webfontloader';

const configureWebFontService = () => {
  WebFont.load({
    google: {
      families: ['Montserrat:400,500,700,700i,800']
    }
  });
};

export default configureWebFontService;
