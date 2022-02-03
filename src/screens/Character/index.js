import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  View,
  TouchableOpacity,
} from 'react-native';
import {CharacterCard} from './characterCard';
import {characterstyles as styles} from './styles';
import {Icon} from '../../../assets/svg';

function Character({navigation}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const FetchData = () => {
    setLoading(true);
    fetch('https://www.breakingbadapi.com/api/characters?limit=12&offset=0')
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
        />
      </View>
    </>
  );
}

export default Character;

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
