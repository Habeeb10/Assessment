import {StyleSheet} from 'react-native';
import {hp} from '../../common/utils';

export const episodestyles = StyleSheet.create({
  slideicon: {
    marginBottom: hp(10),
    paddingHorizontal: hp(20),
    alignSelf: 'flex-end',
    marginTop: hp(70),
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
