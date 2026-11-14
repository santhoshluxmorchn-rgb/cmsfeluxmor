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
    paddingBottom: 48,
    justifyContent: 'space-between',
  },
  topSection: {
    alignItems: 'center',
    gap: 16,
  },
  calendarIconWrapper: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  title: {
    fontSize: 24,
    fontFamily: fonts.headingBold,
    color: '#0F172A',
    textAlign: 'center',
    letterSpacing: 0.2,
  },
  bookingIdBadge: {
    backgroundColor: '#16A34A',
    paddingVertical: 14,
    paddingHorizontal: 22,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    shadowColor: '#16A34A',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
    marginTop: 4,
  },
  bookingIdText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: fonts.headingBold,
    letterSpacing: 0.8,
  },
  doctorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
    width: '100%',
    paddingHorizontal: 6,
    marginTop: 12,
  },
  doctorAvatar: {
    width: 82,
    height: 82,
    borderRadius: 41,
    borderWidth: 2.5,
    borderColor: '#B8CEF0',
  },
  doctorInfo: {
    flex: 1,
    gap: 4,
  },
  doctorName: {
    fontSize: 20,
    fontFamily: fonts.headingBold,
    color: '#0F172A',
  },
  doctorSpecialty: {
    fontSize: 15,
    fontFamily: fonts.bodyMedium,
    color: '#334155',
  },
  detailsSection: {
    width: '100%',
    gap: 18,
    paddingHorizontal: 12,
    marginTop: 12,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  detailText: {
    fontSize: 16,
    fontFamily: fonts.bodyMedium,
    color: '#0F172A',
  },
  bottomSection: {
    width: '100%',
    paddingBottom: 44,
    marginTop: 20,
  },
  viewAppointmentButton: {
    height: 54,
    borderRadius: 27,
    backgroundColor: '#2F36C6',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#2F36C6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  viewAppointmentButtonText: {
    fontSize: 18,
    fontFamily: fonts.headingBold,
    color: '#FFFFFF',
  },
});

export default styles;
