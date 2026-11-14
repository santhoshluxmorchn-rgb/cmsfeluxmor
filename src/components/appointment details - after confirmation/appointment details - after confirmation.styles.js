import { StyleSheet } from 'react-native';

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
    fontSize: 23,
    fontWeight: '700',
    color: '#0F172A',
  },
  placeholder: {
    width: 34,
  },
  detailsCard: {
    gap: 18,
    marginBottom: 28,
    paddingHorizontal: 2,
    marginTop: 14,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  detailLabel: {
    width: 135,
    fontSize: 16.5,
    color: '#0F172A',
    fontWeight: '600',
  },
  colon: {
    fontSize: 16.5,
    color: '#0F172A',
    fontWeight: '700',
    marginRight: 14,
  },
  detailValue: {
    flex: 1,
    fontSize: 16.5,
    color: '#0F172A',
    fontWeight: '700',
  },
  healthIssueSection: {
    marginBottom: 26,
  },
  sectionLabel: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 10,
  },
  issueInput: {
    backgroundColor: '#BED8FB',
    borderRadius: 14,
    padding: 14,
    height: 100,
    fontSize: 16,
    color: '#0F172A',
    fontWeight: '500',
    lineHeight: 22,
  },
  continueButton: {
    height: 52,
    borderRadius: 26,
    backgroundColor: '#2F36C6',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 6,
  },
  continueButtonText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
  },

  // 21st Screen Styles: View / Reschedule Appointment Details
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
    fontSize: 21,
    fontWeight: '700',
    color: '#0F172A',
  },
  doctorLargeSpecialty: {
    fontSize: 15.5,
    fontWeight: '500',
    color: '#64748B',
    marginTop: 3,
  },
  paymentValueRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  paidLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: '#16A34A',
  },
  paidAmount: {
    fontSize: 16.5,
    fontWeight: '700',
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
    fontSize: 14,
    fontWeight: '700',
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
    height: 54,
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
    fontWeight: '700',
    color: '#FFFFFF',
  },
});



export default styles;
