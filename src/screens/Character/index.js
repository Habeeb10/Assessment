import React, {useEffect, useState} from 'react';
import {FlatList, View, TouchableOpacity} from 'react-native';
import {CharacterCard} from './characterCard';
import {characterstyles as styles} from './styles';
import {Icon} from '../../../assets/svg';
import {LoadingView} from '../../common/loading';

function Character({navigation}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(1);
  const [loadingmore, setLoadingMore] = useState(false);

  console.log(limit);
  const onReachEnd = () => {
    setLimit(prev => prev + 1);
  };

  const renderFooter = () => {
    return (
      <View>
        <LoadingView />
      </View>
    );
  };

  useEffect(() => {
    const FetchData = () => {
      limit > 1 ? setLoadingMore(true) : setLoading(true);
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
        .finally(() => (limit > 1 ? setLoadingMore(false) : setLoading(false)));
    };
    FetchData();
  }, [limit]);

  const _renderItem = ({item}) => {
    const {name, category, char_id, img} = item;
    return (
      <CharacterCard
        char_id={char_id}
        name={name}
        category={category}
        imageSource={img}
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
          data={data.slice(0, 50)}
          showsVerticalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
          renderItem={_renderItem}
          onEndReached={onReachEnd}
          ListFooterComponent={loadingmore && renderFooter()}
          onEndReachedThreshold={0.9}
        />
      </View>
    </>
  );
}

export default Character;
