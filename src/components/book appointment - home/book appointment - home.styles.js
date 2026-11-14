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
    paddingHorizontal: 20,
    paddingBottom: 30,
    justifyContent: 'space-between',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  backBtn: {
    padding: 6,
  },
  titleWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 22,
    fontFamily: fonts.headingBold,
    color: '#0F172A',
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  detailsContainer: {
    marginTop: '36%',
    paddingHorizontal: 4,
    paddingBottom: 24,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 20,
  },
  stars: {
    flexDirection: 'row',
    gap: 4,
  },
  reviewText: {
    fontSize: 16,
    color: '#475569',
    fontFamily: fonts.bodyMedium,
  },
  infoList: {
    gap: 18,
    marginBottom: 30,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  infoText: {
    fontSize: 16,
    color: '#0F172A',
    fontFamily: fonts.bodyMedium,
    flexShrink: 1,
    lineHeight: 22,
  },
  mapButton: {
    height: 52,
    borderRadius: 26,
    backgroundColor: '#BED8FB',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 16,
  },
  mapButtonText: {
    fontSize: 18,
    color: '#2F36C6',
    fontFamily: fonts.headingBold,
  },
  bookButton: {
    height: 56,
    borderRadius: 28,
    backgroundColor: '#2F36C6',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    shadowColor: '#2F36C6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 4,
  },
  bookButtonText: {
    color: '#FFFFFF',
    fontSize: 19,
    fontFamily: fonts.headingBold,
  },
});

export default styles;
