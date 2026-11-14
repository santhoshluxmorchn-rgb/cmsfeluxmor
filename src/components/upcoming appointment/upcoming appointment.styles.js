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
    paddingBottom: 24,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
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
  placeholder: {
    width: 36,
  },
  tabsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1.5,
    borderBottomColor: '#CBD5E1',
    marginBottom: 20,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
    position: 'relative',
  },
  tabText: {
    fontSize: 16,
    fontFamily: fonts.headingSemiBold,
    color: '#64748B',
  },
  activeTabText: {
    color: '#2F36C6',
    fontFamily: fonts.headingBold,
  },
  activeIndicator: {
    position: 'absolute',
    bottom: -1.5,
    left: 8,
    right: 8,
    height: 3,
    backgroundColor: '#2F36C6',
    borderRadius: 2,
  },
  listContent: {
    paddingBottom: 36,
  },
  appointmentCard: {
    gap: 14,
    paddingVertical: 8,
  },
  doctorHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  doctorAvatar: {
    width: 74,
    height: 74,
    borderRadius: 37,
    borderWidth: 2,
    borderColor: '#B8CEF0',
  },
  doctorInfo: {
    flex: 1,
    gap: 4,
  },
  doctorName: {
    fontSize: 18,
    fontFamily: fonts.headingBold,
    color: '#0F172A',
  },
  doctorSpecialty: {
    fontSize: 14.5,
    fontFamily: fonts.bodyMedium,
    color: '#475569',
  },
  scheduleInfo: {
    gap: 12,
    paddingLeft: 4,
  },
  scheduleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  scheduleText: {
    fontSize: 15,
    fontFamily: fonts.bodyMedium,
    color: '#0F172A',
  },
  statusBadgeWrapper: {
    alignItems: 'center',
    marginTop: 4,
  },
  statusBadge: {
    backgroundColor: '#16A34A',
    paddingVertical: 8,
    paddingHorizontal: 28,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 150,
  },
  statusBadgeCompliable: {
    backgroundColor: '#16A34A',
  },
  statusBadgeCanceled: {
    backgroundColor: '#DC2626',
  },
  statusBadgeText: {
    fontSize: 15,
    fontFamily: fonts.headingBold,
    color: '#FFFFFF',
  },
  viewDetailsButton: {
    height: 44,
    borderRadius: 22,
    backgroundColor: '#BED8FB',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  viewDetailsButtonText: {
    fontSize: 16,
    fontFamily: fonts.headingBold,
    color: '#2F36C6',
  },
  actionButtonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 14,
    marginTop: 6,
  },
  rescheduleButton: {
    flex: 1,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#BED8FB',
    borderWidth: 1.5,
    borderColor: '#3B4CCA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rescheduleButtonText: {
    fontSize: 16,
    fontFamily: fonts.headingBold,
    color: '#2F36C6',
  },
  cancelButton: {
    flex: 1,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#FCA5A5',
    borderWidth: 1.5,
    borderColor: '#EF4444',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButtonText: {
    fontSize: 16,
    fontFamily: fonts.headingBold,
    color: '#DC2626',
  },
  separator: {
    height: 1,
    backgroundColor: '#CBD5E1',
    marginVertical: 18,
    opacity: 0.8,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 60,
    gap: 10,
  },
  emptyText: {
    fontSize: 16,
    fontFamily: fonts.bodyMedium,
    color: '#64748B',
  },
});

export default styles;
