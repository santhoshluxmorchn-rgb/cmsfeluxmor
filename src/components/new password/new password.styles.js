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
    paddingTop: '28%',
    paddingHorizontal: 20,
    paddingBottom: 24,
  },
  iconWrapper: {
    alignSelf: 'center',
    marginBottom: 4,
  },
  title: {
    fontSize: 24,
    fontFamily: fonts.headingBold,
    color: '#0F172A',
    textAlign: 'center',
  },
  subtitle: {
    marginTop: 4,
    fontSize: 13,
    fontFamily: fonts.bodyRegular,
    color: '#334155',
    textAlign: 'center',
  },
  inputBox: {
    marginTop: 12,
    height: 48,
    borderRadius: 14,
    backgroundColor: '#C8DCF5',
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  input: {
    flex: 1,
    fontSize: 15,
    fontFamily: fonts.bodyMedium,
    color: '#0F172A',
  },
  strengthRow: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  strengthLabel: {
    fontSize: 13,
    fontFamily: fonts.bodyRegular,
    color: '#0F172A',
  },
  strengthValue: {
    fontSize: 13,
    fontFamily: fonts.headingBold,
  },
  barsRow: {
    marginTop: 6,
    flexDirection: 'row',
    gap: 6,
  },
  bar: {
    flex: 1,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#D1D5DB',
  },
  rulesCard: {
    marginTop: 12,
    borderRadius: 14,
    backgroundColor: '#BBE2B5',
    paddingVertical: 14,
    paddingHorizontal: 16,
    gap: 9,
  },
  ruleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  ruleText: {
    fontSize: 13,
    fontFamily: fonts.bodyRegular,
    color: '#0F172A',
  },
  primaryButton: {
    marginTop: 16,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#2F36C6',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#2F36C6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 3,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: fonts.headingBold,
  },
  outlineButton: {
    marginTop: 10,
    height: 50,
    borderRadius: 25,
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
