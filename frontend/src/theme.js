import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

import blue from '@material-ui/core/colors/blue';
import yellow from '@material-ui/core/colors/yellow';

const theme = responsiveFontSizes(
    createMuiTheme({
      palette: {
        primary: blue,
        secondary: yellow,
      },
  })
);

export default theme;
