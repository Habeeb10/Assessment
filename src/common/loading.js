import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

export const LoadingView = () => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator size="large" color="black" absoluteFill />
    </View>
  );
};

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
