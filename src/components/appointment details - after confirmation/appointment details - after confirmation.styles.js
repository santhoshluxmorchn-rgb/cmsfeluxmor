import { StyleSheet } from 'react-native';
import { fonts } from '../../theme/typography';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  keyboardView: {
    flex: 1,
  },
  content: {
    paddingTop: '20%',
    paddingHorizontal: 20,
    paddingBottom: 32,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 28,
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
    width: 34,
  },
  detailsCard: {
    gap: 16,
    marginBottom: 26,
    paddingHorizontal: 2,
    marginTop: 14,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  detailLabel: {
    width: 135,
    fontSize: 15,
    color: '#0F172A',
    fontFamily: fonts.bodyMedium,
  },
  colon: {
    fontSize: 15,
    color: '#0F172A',
    fontFamily: fonts.bodyBold,
    marginRight: 14,
  },
  detailValue: {
    flex: 1,
    fontSize: 15.5,
    color: '#0F172A',
    fontFamily: fonts.bodyBold,
  },
  healthIssueSection: {
    marginBottom: 26,
  },
  sectionLabel: {
    fontSize: 17,
    fontFamily: fonts.headingBold,
    color: '#0F172A',
    marginBottom: 10,
  },
  issueInput: {
    backgroundColor: '#BED8FB',
    borderRadius: 14,
    padding: 14,
    height: 100,
    fontSize: 15,
    fontFamily: fonts.bodyRegular,
    color: '#0F172A',
    lineHeight: 21,
  },
  continueButton: {
    height: 52,
    borderRadius: 26,
    backgroundColor: '#2F36C6',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 6,
    shadowColor: '#2F36C6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 3,
  },
  continueButtonText: {
    fontSize: 18,
    fontFamily: fonts.headingBold,
    color: '#FFFFFF',
  },
  doctorProfileSection: {
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 24,
  },
  doctorLargeAvatar: {
    width: 88,
    height: 88,
    borderRadius: 44,
    borderWidth: 2.5,
    borderColor: '#B8CEF0',
    marginBottom: 10,
  },
  doctorLargeName: {
    fontSize: 20,
    fontFamily: fonts.headingBold,
    color: '#0F172A',
  },
  doctorLargeSpecialty: {
    fontSize: 15,
    fontFamily: fonts.bodyMedium,
    color: '#64748B',
    marginTop: 3,
  },
  paymentValueRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  paidLabel: {
    fontSize: 14,
    fontFamily: fonts.headingBold,
    color: '#16A34A',
  },
  paidAmount: {
    fontSize: 15.5,
    fontFamily: fonts.headingBold,
    color: '#0F172A',
  },
  statusBadge: {
    paddingVertical: 4,
    paddingHorizontal: 14,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  statusBadgeConfirmed: {
    backgroundColor: '#DCFCE7',
  },
  statusBadgeCompleted: {
    backgroundColor: '#E0F2FE',
  },
  statusBadgeCanceled: {
    backgroundColor: '#FEE2E2',
  },
  statusBadgeText: {
    fontSize: 13.5,
    fontFamily: fonts.headingBold,
  },
  statusBadgeTextConfirmed: {
    color: '#16A34A',
  },
  statusBadgeTextCompleted: {
    color: '#0284C7',
  },
  statusBadgeTextCanceled: {
    color: '#DC2626',
  },
  addToCalendarButton: {
    height: 52,
    borderRadius: 14,
    backgroundColor: '#2F36C6',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    shadowColor: '#2F36C6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  addToCalendarButtonText: {
    fontSize: 18,
    fontFamily: fonts.headingBold,
    color: '#FFFFFF',
  },
});

export default styles;
