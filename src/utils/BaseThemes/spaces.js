import {StatusBar} from 'react-native';
import {wp} from '../Dimensions';

const spaces = {
  appSpacing: wp(23),
  //   appicon_large: 200,
  //   appicon_small: 150,
  statusBarHeight: StatusBar.currentHeight || 40,
};

export default spaces;
