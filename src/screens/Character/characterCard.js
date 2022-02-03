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
  imagesource,
}) => {
  return (
    <View>
      <TouchableOpacity style={styles.container}>
        <View style={styles.infocontainer}>
          <Text style={styles.character}> {char_id}</Text>
          <Text style={styles.character}> {status}</Text>
          <Text style={styles.character}> {name}</Text>
          <Text style={styles.character}> {occupation}</Text>
          <Text style={styles.character}> {nickname}</Text>
          <Text style={styles.character}> {appearance}</Text>
          <Text style={styles.character}> {category}</Text>
          <Text style={styles.character}> {portrayed}</Text>
          <Text style={styles.character}> {birthday}</Text>
          <View style={styles.image}>
            <Image
              style={{width: wp(30), height: hp(30)}}
              source={{
                img: imagesource,
              }}
              resizeMode="contain"
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  slideicon: {
    marginBottom: hp(20),
    paddingHorizontal: hp(10),
    alignSelf: 'flex-end',
  },
  character: {
    fontSize: hp(15),
    fontWeight: '400',
  },

  container: {
    backgroundColor: colors.white,
    borderRadius: hp(10),
    borderWidth: 1,
    width: wp(350),
    alignSelf: 'center',
    height: hp(185),
    marginBottom: hp(10),
    paddingHorizontal: hp(10),
  },
});
