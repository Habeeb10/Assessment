import {StyleSheet} from 'react-native';
import {hp} from '../../common/utils';

export const characterstyles = StyleSheet.create({
  contentcontainer: {
    paddingBottom: 30,
  },
  flatlistcontainer: {
    flex: 1,
  },
  edgescontainer: {
    flex: 1,
  },
  slideicon: {
    marginBottom: hp(9),
    paddingHorizontal: hp(20),
    alignSelf: 'flex-end',
    marginTop: hp(60),
  },
});
