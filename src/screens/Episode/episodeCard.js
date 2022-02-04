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
          <Text style={styles.episode_id}> {episode_id}</Text>
          <Text style={styles.title}> {title}</Text>
          <Text style={styles.series}> {series}</Text>
          {/* <Text style={styles.character}> {episode}</Text>
          <Text style={styles.character}> {air_date}</Text>
          <Text style={styles.character}> {characters}</Text>
          <Text style={styles.character}> {season}</Text> */}
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  series: {
    fontSize: hp(15),
  },
  title: {
    fontSize: hp(15),
    fontWeight: 'bold',
  },
  episode_id: {
    fontSize: hp(15),
    fontWeight: '400',
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
    borderColor: colors.irishblue,
    justifyContent: 'center',
  },
});
