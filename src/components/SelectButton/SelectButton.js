import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Basestyle} from '../../utils/BaseThemes';
import {hp, wp} from '../../utils/Dimensions';
import LinearGradient from 'react-native-linear-gradient';

const SelectButton = ({pressAction, text}) => {
  return (
    <LinearGradient colors={['#e8e8e8', '#c1c1c1']} style={styles.container}>
      <TouchableOpacity
        onPress={() => pressAction()}
        style={[
          Basestyle.box_full,
          {justifyContent: 'center', alignItems: 'center'},
        ]}>
        <Text style={[Basestyle.regular_14]}>{text}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default SelectButton;

const styles = StyleSheet.create({
  container: {
    height: hp(30),
    borderRadius: 5,
    borderColor: '#83868b',
    borderWidth: 1,
    width: wp(100),
  },
});
