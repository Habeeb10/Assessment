import React, {useEffect, useState} from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import {episodestyles as styles} from './styles';
import {EpisodeCard} from './episodeCard';
import {Icon} from '../../../assets/svg';
import {LoadingView} from '../../common/loading';
import {SafeAreaView} from 'react-native-safe-area-context';
import {hp} from '../../common/utils';

function Episode({navigation}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const FetchData = () => {
    setLoading(true);
    fetch('https://www.breakingbadapi.com/api/episodes')
      .then(response => response.json())
      .then(res => {
        setData(res);
        console.log(res);
      })
      .catch(err => err)
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    FetchData();
  }, []);
  const _renderItem = ({item}) => {
    const {title, episode, series} = item;
    return <EpisodeCard episode={episode} series={series} title={title} />;
  };
  if (loading) {
    return <LoadingView />;
  }
  return (
    <SafeAreaView edges={['top', 'bottom']} style={styles.edgescontainer}>
      <TouchableOpacity
        style={styles.slideicon}
        onPress={() => navigation.navigate('character')}>
        <Icon />
      </TouchableOpacity>
      <FlatList
        contentContainerStyle={{paddingBottom: hp(60)}}
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={_renderItem}
      />
    </SafeAreaView>
  );
}
export default Episode;
