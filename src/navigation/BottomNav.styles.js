import { StyleSheet } from 'react-native';
import { fonts } from '../theme/typography';

const styles = StyleSheet.create({
  container: {
    height: 58,
    backgroundColor: '#B3CEF2',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 12,
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
  },
  label: {
    fontSize: 11.5,
    fontFamily: fonts.bodyMedium,
  },
});

export default styles;
