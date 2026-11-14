import { StyleSheet } from 'react-native';
import { fonts } from '../../theme/typography';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    paddingTop: '14%',
    paddingHorizontal: 16,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '43%',
  },
  greetingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 22,
    fontFamily: fonts.headingBold,
    color: '#0F172A',
  },
  wave: {
    fontSize: 18,
  },
  subGreeting: {
    marginTop: 2,
    fontSize: 14,
    fontFamily: fonts.bodyRegular,
    color: '#475569',
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 16,
  },
  card: {
    width: '48%',
    height: 126,
    backgroundColor: '#B8CEF0',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    shadowColor: '#2F36C6',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 5,
    elevation: 3,
  },
  iconCircle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardText: {
    fontSize: 15,
    fontFamily: fonts.headingSemiBold,
    color: '#0F172A',
    textAlign: 'center',
    lineHeight: 19,
  },
});

export default styles;
