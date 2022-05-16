import {StyleSheet, Text, Image, View} from 'react-native';
import React from 'react';
import {Basestyle, Images} from '../../utils/BaseThemes';
import {hp, wp} from '../../utils/Dimensions';

const SuccessView = ({}) => {
  return (
    <View style={styles.container}>
      <Image
        source={Images.successIcon}
        resizeMode="contain"
        style={{width: wp(140), height: hp(135)}}
      />
      <Text
        style={[Basestyle.medium_14, {fontSize: wp(16), paddingTop: hp(20)}]}>
        Your data has been submitted successfully!
      </Text>
    </View>
  );
};

export default SuccessView;

const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
  },
});
