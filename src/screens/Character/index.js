import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import {CharacterCard} from './card';
import {characterstyles as styles} from './styles';
// import {BASE_URL} from '../../common/constant';

function Character() {
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
      url,
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
        imageSource={url}
      />
    );
  };

  if (loading) {
    return <LoadingView />;
  }

  return (
    <>
      <View style={styles.charactercontainer}>
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

// onPress={() =>
//     navigation.navigate("items", {
//       details: item,
//     })
//   }

const LoadingView = () => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator size="large" color="black" absoluteFill />
    </View>
  );
};
