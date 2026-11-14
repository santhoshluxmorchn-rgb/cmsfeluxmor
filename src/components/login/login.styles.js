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
    paddingTop: SCREEN_HEIGHT > 700 ? SCREEN_HEIGHT * 0.30 : 205,
    paddingHorizontal: 22,
    paddingBottom: 20,
  },
  title: {
    fontSize: 28,
    fontFamily: fonts.headingBold,
    color: '#0F172A',
    textAlign: 'center',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14.5,
    fontFamily: fonts.bodyRegular,
    lineHeight: 21,
    color: '#334155',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputBox: {
    marginBottom: 14,
    height: 52,
    borderRadius: 14,
    backgroundColor: '#C8DCF5',
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  input: {
    flex: 1,
    fontSize: 15.5,
    fontFamily: fonts.bodyMedium,
    color: '#0F172A',
    paddingVertical: 0,
  },
  rowBetween: {
    marginTop: 4,
    marginBottom: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 4,
    width: '100%',
  },
  rememberTouch: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  rememberRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: '#2F36C6',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  checkboxChecked: {
    backgroundColor: '#2F36C6',
  },
  rememberText: {
    fontSize: 15,
    fontFamily: fonts.bodyMedium,
    color: '#0F172A',
  },
  forgotText: {
    fontSize: 15,
    fontFamily: fonts.headingSemiBold,
    color: '#2F36C6',
  },
  primaryButton: {
    height: 52,
    borderRadius: 26,
    backgroundColor: '#2F36C6',
    alignItems: 'center',
    justifyContent: 'center',
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
  dividerRow: {
    marginVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#94A3B8',
  },
  dividerText: {
    fontSize: 14.5,
    fontFamily: fonts.bodyMedium,
    color: '#475569',
  },
  googleButton: {
    height: 52,
    borderRadius: 14,
    backgroundColor: '#C8DCF5',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  googleButtonText: {
    fontSize: 15.5,
    fontFamily: fonts.headingSemiBold,
    color: '#0F172A',
  },
  googleIcon: {
    width: 22,
    height: 22,
  },
  registerSection: {
    marginTop: 22,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  registerPromptRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  registerPromptText: {
    fontSize: 14,
    fontFamily: fonts.bodyRegular,
    color: '#334155',
  },
  registerLink: {
    fontSize: 15,
    fontFamily: fonts.headingBold,
    color: '#2F36C6',
  },
});

export default styles;
