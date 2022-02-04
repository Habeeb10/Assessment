import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {hp, wp} from '../../common/utils';
import * as colors from '../../common/colors';

export const EpisodeCard = ({episode, title, series}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.infocontainer}>
          <Text style={styles.episode}> {episode}</Text>
          <Text style={styles.title}> {title}</Text>
          <Text style={styles.series}> {series}</Text>
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
  episode: {
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
