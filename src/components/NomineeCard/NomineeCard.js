import {StyleSheet, FlatList, Text, Dimensions, View} from 'react-native';
import React from 'react';
import {Basestyle, Colors} from '../../utils/BaseThemes';
import {hp, wp} from '../../utils/Dimensions';
import SelectButton from '../SelectButton/SelectButton';
import UserAvatar from '../UserAvatar/UserAvatar';

const {width} = Dimensions.get('window');
const itemWidth = width / 3.3;

const NomineeCard = ({item, categoryName, nominees, selectNominee}) => {
  console.log('nominee card loaded');

  const isSelected = id => {
    return nominees[categoryName] === id ? true : false;
  };
  const renderItem = ({item}) => {
    return (
      <View
        style={[
          styles.container,
          isSelected(item.id) ? {backgroundColor: Colors.primary_green} : null,
        ]}
        key={item.id}>
        <Text style={styles.textStyle}>{item.title}</Text>
        <UserAvatar url={item.photoUrL} />
        <SelectButton
          pressAction={() => selectNominee(categoryName, item.id)}
          text={isSelected(item.id) ? 'Selected' : 'Select Button'}
        />
      </View>
    );
  };
  return (
    <FlatList
      data={item}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      numColumns={3}
      style={{marginBottom: hp(30)}}
    />
  );
};

export default NomineeCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.secondary_blue,
    borderWidth: 1.5,
    borderColor: Colors.nominee_border,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: itemWidth,
    marginHorizontal: wp(6.5),
    marginTop: hp(20),
    minHeight: hp(150),
    paddingVertical: hp(10),
  },
  textStyle: {
    ...Basestyle.medium_14,
    textAlign: 'center',
    paddingHorizontal: wp(5),
  },
});
