import {StyleSheet} from 'react-native';
import {Basestyle} from '../../utils/BaseThemes';
import {hp} from '../../utils/Dimensions';

export default StyleSheet.create({
  headerText: {
    ...Basestyle.bold_16,
    textAlign: 'center',
    paddingBottom: hp(20),
    paddingTop: hp(10),
  },
  loadingIndicator: {
    alignSelf: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
  },
  emptyText: {
    ...Basestyle.regular_14,
    textAlign: 'center',
    paddingTop: hp(50),
  },
  bodyContainer: {marginBottom: hp(30), flex: 1},
});
