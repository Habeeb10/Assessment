import {StyleSheet} from 'react-native';
import {hp} from '../../common/utils';

export const characterstyles = StyleSheet.create({
  slideicon: {
    marginBottom: hp(20),
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
