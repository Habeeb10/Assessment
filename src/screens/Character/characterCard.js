import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {hp, wp} from '../../common/utils';
import * as colors from '../../common/colors';

export const CharacterCard = ({name, category, char_id, imageSource}) => {
  return (
    <View style={styles.container}>
      <View style={styles.itemcontainer}>
        <TouchableOpacity>
          <Image
            style={styles.image}
            source={{
              uri: imageSource,
            }}
            resizeMode="cover"
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.infocontainer}>
            <Text style={styles.character}> {char_id}</Text>
            <Text style={styles.name}> {name}</Text>
            <Text style={styles.category}> {category}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  infocontainer: {
    marginLeft: hp(5),
  },
  itemcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: wp(45),
    height: hp(50),
    borderRadius: hp(40),
  },
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
  },
});
