import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    paddingTop: '60%',
    paddingHorizontal: 20,
  },
  iconWrapper: {
    alignSelf: 'center',
    marginBottom: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#0F172A',
    textAlign: 'center',
  },
  subtitle: {
    marginTop: 2,
    fontSize: 12,
    color: '#0F172A',
    textAlign: 'center',
  },
  inputBox: {
    marginTop: 10,
    height: 42,
    borderRadius: 12,
    backgroundColor: '#B8CEF0',
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#0F172A',
  },
  strengthRow: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  strengthLabel: {
    fontSize: 13,
    color: '#0F172A',
  },
  strengthValue: {
    fontSize: 13,
    fontWeight: '600',
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
    marginTop: 10,
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
    color: '#0F172A',
  },
  primaryButton: {
    marginTop: 12,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#2F36C6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '600',
  },
  outlineButton: {
    marginTop: 8,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#B8CEF0',
    borderWidth: 1.5,
    borderColor: '#2F36C6',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  outlineButtonText: {
    color: '#2F36C6',
    fontSize: 17,
    fontWeight: '600',
  },
});


export default styles;
