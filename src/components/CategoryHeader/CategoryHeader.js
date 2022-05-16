import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Basestyle, Colors} from '../../utils/BaseThemes';
import {hp, wp} from '../../utils/Dimensions';

const CategoryHeader = ({category_name}) => {
  console.log('category header loaded');

  return (
    <View style={styles.container}>
      <Text style={[Basestyle.medium_14, styles.textStyle]}>
        {category_name}
      </Text>
    </View>
  );
};

export default CategoryHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary_blue,
    borderWidth: 1,
    borderColor: Colors.border_blue,
  },
  textStyle: {paddingVertical: hp(5), paddingHorizontal: wp(10)},
});
