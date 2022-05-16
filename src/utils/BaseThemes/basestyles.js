import {StyleSheet} from 'react-native';
import Spaces from './spaces';
import {hp, wp} from '../Dimensions';
import Colors from './colors';
import FontNames from './fontnames';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.primary_white,
    flex: 1,
  },
  paddingHorizontal: {
    paddingHorizontal: Spaces.appSpacing,
  },
  hitSlop: {top: 10, bottom: 10, left: 10, right: 10},
  icon_right: {position: 'absolute', top: hp(10), right: wp(20)},

  //Grid system
  column_center: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  row_align_center: {flexDirection: 'row', alignItems: 'center'},
  row_space_between_center: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  row_space_between_start: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  box_full: {
    width: '100%',
    height: '100%',
  },
  row_space_around_center: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  //FONT SIZING
  bold_16: {
    fontFamily: FontNames.bold,
    fontSize: wp(16),
    color: Colors.primary_black,
  },
  medium_14: {
    fontFamily: FontNames.medium,
    fontSize: wp(14),
    color: Colors.primary_black,
  },
  regular_14: {
    fontFamily: FontNames.regular,
    fontSize: wp(14),
    color: Colors.primary_black,
  },
});
