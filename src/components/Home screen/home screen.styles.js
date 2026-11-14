import { Dimensions, StyleSheet } from 'react-native';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  cardContainer: {
    position: 'absolute',
    top: height * 0.505,
    left: 14,
    right: 14,
    zIndex: 10,
  },
  featureCard: {
    height: 108,
    marginHorizontal: 8,
    backgroundColor: '#B2CDF1',
    borderRadius: 20,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  featureCardImage: {
    borderRadius: 20,
  },
  featureItemWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
  },
  featureDivider: {
    width: 1,
    height: '62%',
    backgroundColor: 'rgba(15, 23, 42, 0.25)',
  },
  featureItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingHorizontal: 4,
  },
  featureLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#0F172A',
    textAlign: 'center',
    lineHeight: 16,
  },
  subtitle: {
    marginTop: 16,
    paddingHorizontal: 10,
    fontSize: 13,
    lineHeight: 19,
    color: '#1F2937',
    textAlign: 'center',
  },
  button: {
    marginTop: 22,
    marginHorizontal: 14,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#2F36C6',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '500',
  },
  dotsContainer: {
    marginTop: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 14,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#B8C2D8',
  },
  activeDot: {
    backgroundColor: '#2F36C6',
  },
  accountRow: {
    marginTop: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  accountText: {
    fontSize: 15,
    color: '#0F172A',
  },
  loginButton: {
    marginTop: 8,
    alignSelf: 'center',
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  loginText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2F36C6',
    letterSpacing: 0.5,
  },
});

export default styles;
