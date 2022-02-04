import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, View, TouchableOpacity} from 'react-native';
import {CharacterCard} from './characterCard';
import {characterstyles as styles} from './styles';
import {Icon} from '../../../assets/svg';
import {LoadingView} from '../../common/loading';
import {SafeAreaView} from 'react-native-safe-area-context';

function Character({navigation}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(1);
  const [loadingmore, setLoadingMore] = useState(false);
  const onReachEnd = () => {
    if (limit >= 5) {
      return;
    } else {
      setLimit(limit + 1);
    }
  };
  const renderFooter = () => {
    return (
      <View>
        <LoadingView />
      </View>
    );
  };
  const FetchData = useCallback(() => {
    limit > 1 ? setLoadingMore(true) : setLoading(true);
    fetch(
      `https://www.breakingbadapi.com/api/characters?limit=${
        limit * 12
      }&offset=0`,
    )
      .then(response => response.json())
      .then(res => {
        setData(res);
      })
      .catch(err => err)
      .finally(() => (limit > 1 ? setLoadingMore(false) : setLoading(false)));
  }, [limit]);
  useEffect(() => {
    data.length < 50 && FetchData();
  }, [FetchData, data.length, limit]);
  console.log(limit);
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
    <SafeAreaView edges={['top', 'bottom']} style={styles.edgescontainer}>
      <TouchableOpacity
        style={styles.slideicon}
        onPress={() => navigation.navigate('episode')}>
        <Icon />
      </TouchableOpacity>
      <FlatList
        style={styles.flatlistcontainer}
        contentContainerStyle={styles.contentcontainer}
        data={data.slice(0, 50)}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={_renderItem}
        onEndReached={onReachEnd}
        ListFooterComponent={loadingmore && renderFooter()}
        onEndReachedThreshold={0}
      />
    </SafeAreaView>
  );
}
export default Character;
