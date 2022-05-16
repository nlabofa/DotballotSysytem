import {StyleSheet, Image, View} from 'react-native';
import React from 'react';
import {Basestyle} from '../../utils/BaseThemes';
import {hp, wp} from '../../utils/Dimensions';

const UserAvatar = ({url}) => {
  return (
    <View style={styles.container}>
      <Image
        style={Basestyle.box_full}
        borderRadius={30}
        source={{
          uri: url,
        }}
      />
    </View>
  );
};

export default UserAvatar;

const styles = StyleSheet.create({
  container: {
    width: wp(60),
    overflow: 'hidden',
    marginVertical: hp(10),
    height: hp(60),
  },
});
