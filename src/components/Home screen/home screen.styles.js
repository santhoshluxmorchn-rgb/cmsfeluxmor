import { Dimensions, StyleSheet } from 'react-native';
import { fonts } from '../../theme/typography';

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
    fontFamily: fonts.headingSemiBold,
    fontSize: 12,
    color: '#0F172A',
    textAlign: 'center',
    lineHeight: 16,
  },
  subtitle: {
    marginTop: 16,
    paddingHorizontal: 10,
    fontFamily: fonts.bodyRegular,
    fontSize: 14,
    lineHeight: 20,
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
    fontFamily: fonts.headingSemiBold,
    fontSize: 18,
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
    gap: 10,
  },
  accountText: {
    fontSize: 15,
    fontFamily: fonts.bodyMedium,
    color: '#0F172A',
  },
  loginButton: {
    marginTop: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    fontSize: 17,
    fontFamily: fonts.headingBold,
    color: '#2F36C6',
    letterSpacing: 0.5,
  },
});

export default styles;
