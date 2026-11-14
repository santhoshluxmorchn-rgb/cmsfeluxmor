import { Dimensions, StyleSheet } from 'react-native';
import { fonts } from '../../theme/typography';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 30,
  },
  content: {
    paddingTop: SCREEN_HEIGHT > 700 ? SCREEN_HEIGHT * 0.33 : 230,
    paddingHorizontal: 22,
    paddingBottom: 20,
  },
  iconWrapper: {
    alignSelf: 'center',
    width: 76,
    height: 72,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  badgeCircle: {
    position: 'absolute',
    right: 2,
    bottom: 2,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
  },
  title: {
    fontSize: 28,
    fontFamily: fonts.headingBold,
    color: '#0F172A',
    textAlign: 'center',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: fonts.bodyRegular,
    lineHeight: 20,
    color: '#334155',
    textAlign: 'center',
    marginBottom: 12,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 18,
  },
  contactText: {
    fontSize: 17,
    fontFamily: fonts.headingBold,
    color: '#0F172A',
  },
  editRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  editText: {
    fontSize: 15,
    fontFamily: fonts.headingSemiBold,
    color: '#2F36C6',
  },
  otpRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 4,
    marginBottom: 16,
  },
  otpBox: {
    width: 48,
    height: 50,
    borderRadius: 12,
    backgroundColor: '#C8DCF5',
    borderWidth: 1,
    borderColor: '#93C5FD',
    fontSize: 22,
    fontFamily: fonts.headingBold,
    color: '#0F172A',
    textAlign: 'center',
  },
  resendRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
  },
  resendLabel: {
    fontSize: 14.5,
    fontFamily: fonts.bodyRegular,
    color: '#475569',
  },
  resendTimer: {
    fontSize: 14.5,
    fontFamily: fonts.headingBold,
    color: '#2F36C6',
  },
  primaryButton: {
    height: 52,
    borderRadius: 26,
    backgroundColor: '#2F36C6',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
    shadowColor: '#2F36C6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 4,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 19,
    fontFamily: fonts.headingBold,
  },
  outlineButton: {
    height: 52,
    borderRadius: 26,
    backgroundColor: '#C8DCF5',
    borderWidth: 1.5,
    borderColor: '#2F36C6',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  outlineButtonText: {
    color: '#2F36C6',
    fontSize: 18,
    fontFamily: fonts.headingBold,
  },
});

export default styles;
