import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {hp, wp} from '../../common/utils';
import * as colors from '../../common/colors';

export const CharacterCard = ({
  name,
  status,
  occupation,
  nickname,
  appearance,
  category,
  portrayed,
  birthday,
  char_id,
  imageSource,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.infocontainer}>
          <Text style={styles.character}> {char_id}</Text>
          {/* <Text style={styles.character}> {status}</Text> */}
          <Text style={styles.name}> {name}</Text>
          {/* <Text style={styles.character}> {occupation}</Text> */}
          {/* <Text style={styles.character}> {nickname}</Text> */}
          {/* <Text style={styles.character}> {appearance}</Text> */}
          <Text style={styles.category}> {category}</Text>
          {/* <Text style={styles.character}> {portrayed}</Text> */}
          {/* <Text style={styles.character}> {birthday}</Text> */}
          <View style={styles.image}>
            <Image
              style={{width: 40, height: 40, borderRadius: 40}}
              source={{
                uri: imageSource,
              }}
              resizeMode="cover"
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  name: {
    fontSize: hp(15),
    fontWeight: 'bold',
  },
  category: {
    fontSize: hp(15),
  },
  container: {
    backgroundColor: colors.white,
    borderRadius: hp(10),
    width: wp(350),
    alignSelf: 'center',
    marginBottom: hp(20),
    paddingHorizontal: hp(10),
    paddingVertical: hp(10),
    borderWidth: hp(0.5),
    borderColor: colors.snuff,
    justifyContent: 'center',
  },
});
