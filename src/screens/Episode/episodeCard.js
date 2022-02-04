import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {hp, wp} from '../../common/utils';
import * as colors from '../../common/colors';

export const EpisodeCard = ({
  episode_id,
  title,
  season,
  episode,
  air_date,
  characters,
  series,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.infocontainer}>
          <Text style={styles.character}> {episode_id}</Text>
          <Text style={styles.character}> {title}</Text>
          {/* <Text style={styles.character}> {season}</Text>
          <Text style={styles.character}> {episode}</Text> */}
          <Text style={styles.character}> {air_date}</Text>
          {/* <Text style={styles.character}> {characters}</Text>
          <Text style={styles.character}> {series}</Text> */}
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  character: {
    fontSize: hp(15),
    fontWeight: '400',
  },

  container: {
    backgroundColor: colors.white,
    borderRadius: hp(10),
    width: wp(350),
    alignSelf: 'center',
    marginBottom: hp(5),
    paddingHorizontal: hp(10),
    paddingVertical: hp(10),
    borderWidth: hp(0.5),
    borderColor: colors.irishblue,
  },
});
