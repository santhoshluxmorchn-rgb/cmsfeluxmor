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
    paddingTop: '16%',
    paddingHorizontal: 22,
    paddingBottom: 24,
    justifyContent: 'space-between',
  },
  topSection: {
    alignItems: 'center',
    gap: 16,
  },
  checkCircle: {
    width: 86,
    height: 86,
    borderRadius: 43,
    backgroundColor: '#22C55E',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#22C55E',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 6,
    marginBottom: 6,
  },
  title: {
    fontSize: 24,
    fontFamily: fonts.headingBold,
    color: '#16A34A',
    textAlign: 'center',
    letterSpacing: 0.2,
  },
  cardsContainer: {
    width: '100%',
    gap: 14,
    marginTop: 12,
  },
  infoCard: {
    backgroundColor: '#BED8FB',
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 20,
    gap: 6,
  },
  cardLabel: {
    fontSize: 15,
    fontFamily: fonts.bodyMedium,
    color: '#0F172A',
  },
  cardValue: {
    fontSize: 18,
    fontFamily: fonts.headingBold,
    color: '#0F172A',
  },
  bottomSection: {
    width: '100%',
    gap: 14,
    paddingBottom: 54,
    marginTop: 16,
  },
  downloadButton: {
    height: 52,
    borderRadius: 26,
    backgroundColor: '#2F36C6',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    shadowColor: '#2F36C6',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 3,
  },
  downloadButtonText: {
    fontSize: 18,
    fontFamily: fonts.headingBold,
    color: '#FFFFFF',
  },
  viewButton: {
    height: 52,
    borderRadius: 26,
    backgroundColor: '#D4E4FC',
    borderWidth: 1.5,
    borderColor: '#3B4CCA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewButtonText: {
    fontSize: 18,
    fontFamily: fonts.headingBold,
    color: '#2F36C6',
  },
});

export default styles;
