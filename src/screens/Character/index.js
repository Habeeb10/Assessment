import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, View, TouchableOpacity} from 'react-native';
import {CharacterCard} from './characterCard';
import {characterstyles as styles} from './styles';
import {Icon} from '../../../assets/svg';
import {LoadingView} from '../../common/loading';

function Character({navigation}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(1);

  const FetchData = useCallback(() => {
    setLoading(true);
    fetch(
      `https://www.breakingbadapi.com/api/characters?limit=${
        limit * 12
      }&offset=0`,
    )
      .then(response => response.json())
      .then(res => {
        setData(res);
        console.log(res);
      })
      .catch(err => err)
      .finally(() => setLoading(false));
  }, [limit]);

  console.log(limit);
  const onReachEnd = () => {
    setLimit(prev => prev + 1);
  };

  useEffect(() => {
    FetchData();
  }, [FetchData]);

  const _renderItem = ({item}) => {
    const {
      name,
      status,
      occupation,
      category,
      nickname,
      appearance,
      portrayed,
      birthday,
      char_id,
    } = item;
    return (
      <CharacterCard
        char_id={char_id}
        name={name}
        status={status}
        occupation={occupation}
        category={category}
        nickname={nickname}
        appearance={appearance}
        portrayed={portrayed}
        birthday={birthday}
      />
    );
  };

  if (loading) {
    return <LoadingView />;
  }

  return (
    <>
      <TouchableOpacity
        style={styles.slideicon}
        onPress={() => navigation.navigate('episode')}>
        <Icon />
      </TouchableOpacity>

      <View>
        <FlatList
          contentContainerStyle
          data={data}
          showsVerticalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
          renderItem={_renderItem}
          onEndReached={onReachEnd}
        />
      </View>
    </>
  );
}

export default Character;
