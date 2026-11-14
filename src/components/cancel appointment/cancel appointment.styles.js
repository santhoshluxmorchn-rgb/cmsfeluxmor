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
    paddingTop: '22%',
    paddingHorizontal: 20,
    paddingBottom: 24,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 26,
  },
  backBtn: {
    padding: 4,
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
  placeholder: {
    width: 32,
  },
  scrollContent: {
    paddingBottom: 24,
  },
  bookingIdBadge: {
    backgroundColor: '#C8DDF8',
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  bookingIdText: {
    fontSize: 16.5,
    fontFamily: fonts.headingBold,
    color: '#0F172A',
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: fonts.headingBold,
    color: '#0F172A',
    marginBottom: 10,
  },
  dropdownCard: {
    backgroundColor: '#C8DDF8',
    borderRadius: 14,
    overflow: 'hidden',
    marginBottom: 26,
  },
  dropdownHeader: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dropdownHeaderText: {
    fontSize: 15.5,
    fontFamily: fonts.headingSemiBold,
    color: '#0F172A',
  },
  optionsList: {
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  optionText: {
    fontSize: 15,
    color: '#1E293B',
    fontFamily: fonts.bodyMedium,
  },
  optionTextSelected: {
    color: '#2F36C6',
    fontFamily: fonts.headingBold,
  },
  warningBox: {
    backgroundColor: '#FDE047',
    borderRadius: 14,
    paddingVertical: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    gap: 12,
  },
  warningIconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  warningText: {
    flex: 1,
    fontSize: 14,
    fontFamily: fonts.headingSemiBold,
    color: '#713F12',
    lineHeight: 20,
  },
  cancelButton: {
    backgroundColor: '#EF4444',
    borderRadius: 14,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#EF4444',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 3,
  },
  cancelButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontFamily: fonts.headingBold,
  },
});

export default styles;
