import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  View,
  TouchableOpacity,
} from 'react-native';
import {episodestyles as styles} from './styles';
import {EpisodeCard} from './episodeCard';
import {Icon} from '../../../assets/svg';

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
    const {episode_id, title, season, episode, air_date, characters, series} =
      item;
    return (
      <EpisodeCard
        episode={episode}
        episode_id={episode_id}
        season={season}
        series={series}
        title={title}
        characters={characters}
        air_date={air_date}
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
        onPress={() => navigation.navigate('character')}>
        <Icon />
      </TouchableOpacity>
      <View>
        <FlatList
          contentContainerStyle
          data={data}
          showsVerticalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
          renderItem={_renderItem}
        />
      </View>
    </>
  );
}

export default Episode;

const LoadingView = () => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator size="large" color="black" absoluteFill />
    </View>
  );
};

// const FetchData = () => {
//   setLoading(true);
//   fetch('https://www.breakingbadapi.com/api/')
//     .then(response => response.json())
//     .then(res => {
//       setData(res.data);
//       console.log(data);
//     })
//     .catch(err => err)
//     .finally(() => setLoading(false));
// };

// onPress={() =>
//     navigation.navigate("items", {
//       details: item,
//     })
//   }
