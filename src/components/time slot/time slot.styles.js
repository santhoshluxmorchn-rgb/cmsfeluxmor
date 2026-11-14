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
    paddingTop: '18%',
    paddingHorizontal: 20,
    paddingBottom: 36,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  backBtn: {
    padding: 6,
  },
  titleWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: fonts.headingBold,
    color: '#0F172A',
  },
  placeholder: {
    width: 36,
  },
  dateSubtitle: {
    fontSize: 18,
    fontFamily: fonts.headingSemiBold,
    color: '#0F172A',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 28,
  },
  slotsContainer: {
    paddingBottom: 36,
    gap: 24,
  },
  section: {
    gap: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: fonts.headingBold,
    color: '#0F172A',
    paddingLeft: 4,
  },
  slotsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 16,
  },
  slotPill: {
    width: '48%',
    height: 58,
    borderRadius: 16,
    backgroundColor: '#BED8FB',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#2F36C6',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  selectedSlotPill: {
    backgroundColor: '#2F36C6',
    shadowColor: '#2F36C6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  slotText: {
    fontSize: 18,
    fontFamily: fonts.headingSemiBold,
    color: '#0F172A',
    letterSpacing: 0.5,
  },
  selectedSlotText: {
    color: '#FFFFFF',
    fontFamily: fonts.headingBold,
  },
});

export default styles;
