import AuthLogo from "./extensions/favicon.png";
import favicon from "./extensions/favicon.ico";

export default {
  config: {
    auth: {
      logo: AuthLogo,
    },
    // Replace the favicon
    head: {
      favicon: favicon,
    },
    menu: {
      logo: AuthLogo,
    },
    tutorials: false,
  },
  bootstrap(app) {
    console.log(app);
  },
};
