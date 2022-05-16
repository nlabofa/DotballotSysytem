import React, {useEffect, useCallback, useState} from 'react';
import {
  SafeAreaView,
  ActivityIndicator,
  FlatList,
  Alert,
  Text,
} from 'react-native';
import CategoryHeader from '../../components/CategoryHeader/CategoryHeader';
import NomineeCard from '../../components/NomineeCard/NomineeCard';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import {Basestyle, Colors} from '../../utils/BaseThemes';
import Modal from 'react-native-modal';
import styles from './HomeStyle';
import SuccessView from '../../components/SuccessView/SuccessView';
const HomeScreen = () => {
  const [isLoading, setIsloading] = useState(true);
  const [award_list, setaward_list] = useState([]);
  const [nominees, setNominees] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    fetchAwardNominees();
  }, []);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const fetchAwardNominees = async () => {
    try {
      setIsloading(true);
      const response = await fetch('http://localhost:8080/api/getBallotData');
      if (response.status === 200) {
        response.json().then(res => {
          //console.log(res);
          setaward_list(res.items);
          setIsloading(false);
        });
      } else {
        setIsloading(false);
        setTimeout(() => {
          Alert.alert(
            'An error occured; we cannot fetch the list at this time!',
          );
        }, 500);
      }
    } catch (error) {
      console.log(error);
      setIsloading(false);
      setTimeout(() => {
        Alert.alert('An error occured; Make sure you started the node server!');
      }, 500);
    }
  };
  const renderItem = ({item}) => {
    return (
      <>
        <CategoryHeader category_name={item?.title} />
        <NomineeCard
          item={item?.items}
          categoryName={item.title}
          selectNominee={chooseNominee}
          nominees={nominees}
        />
      </>
    );
  };
  // const chooseNominee = (category, value) => {
  //   setNominees({...nominees, [category]: value});
  // };
  const chooseNominee = useCallback(
    (category, value) => {
      setNominees({...nominees, [category]: value});
    },
    [nominees],
  );
  const submitData = () => {
    //console.log(nominees);
    toggleModal();
  };
  return (
    <SafeAreaView style={[Basestyle.container]}>
      <Text style={[styles.headerText]}>GOLDEN GLOBE {'\n'} AWARD</Text>
      {isLoading ? (
        <ActivityIndicator
          size="large"
          style={styles.loadingIndicator}
          color={Colors.border_blue}
        />
      ) : (
        <FlatList
          data={award_list}
          keyExtractor={item => item?.id}
          renderItem={renderItem}
          ListFooterComponent={
            <SubmitButton
              pressAction={submitData}
              disabled={nominees.length === 0}
            />
          }
          ListEmptyComponent={
            <Text style={styles.emptyText}>
              There are no nominees at this moment!
            </Text>
          }
        />
      )}
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => toggleModal()}
        onBackButtonPress={() => toggleModal()}>
        <SuccessView />
      </Modal>
    </SafeAreaView>
  );
};

export default HomeScreen;
