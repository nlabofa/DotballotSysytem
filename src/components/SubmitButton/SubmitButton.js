import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Basestyle, Colors} from '../../utils/BaseThemes';
import {hp, wp} from '../../utils/Dimensions';
import LinearGradient from 'react-native-linear-gradient';

const SubmitButton = ({pressAction, disabled}) => {
  console.log('submit button loaded');
  return (
    <LinearGradient
      colors={['#cbe4c5', '#c5e2bd', '#a1d489']}
      style={styles.container}>
      <TouchableOpacity
        onPress={() => pressAction()}
        disabled={disabled}
        style={[Basestyle.box_full, styles.btnextra]}>
        <Text style={[Basestyle.bold_16, styles.extra]}>
          SUBMIT VOTE{'\n'}BUTTON
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default SubmitButton;

const styles = StyleSheet.create({
  container: {
    height: hp(50),
    width: wp(150),
    borderRadius: wp(7),
    borderColor: '#8ebd75',
    alignSelf: 'center',
    borderWidth: 1,
    marginBottom: hp(10),
  },
  btnextra: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  extra: {
    paddingHorizontal: wp(5),
    fontSize: wp(14),
    textAlign: 'center',
  },
});
