import { Dimensions, StyleSheet } from 'react-native';

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
  shieldWrapper: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  keyholeOverlay: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  keyholeHead: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
  },
  keyholeBody: {
    width: 11,
    height: 18,
    marginTop: -3,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#0F172A',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 20,
    color: '#334155',
    textAlign: 'center',
    paddingHorizontal: 8,
    marginBottom: 20,
  },
  inputBox: {
    height: 52,
    borderRadius: 14,
    backgroundColor: '#C8DCF5',
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 20,
  },
  iconGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  slash: {
    fontSize: 15,
    color: '#0F172A',
  },
  input: {
    flex: 1,
    fontSize: 15.5,
    color: '#0F172A',
    paddingVertical: 0,
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
    fontWeight: '700',
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
    fontWeight: '700',
  },
});

export default styles;
