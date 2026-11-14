import { StyleSheet } from 'react-native';

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
    gap: 18,
  },
  calendarIconWrapper: {
    width: 110,
    height: 110,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#0F172A',
    textAlign: 'center',
    letterSpacing: 0.2,
  },
  bookingIdBadge: {
    backgroundColor: '#16A34A',
    paddingVertical: 16,
    paddingHorizontal: 24,
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
    fontSize: 20,
    fontWeight: '800',
    letterSpacing: 0.8,
  },
  doctorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    width: '100%',
    paddingHorizontal: 6,
    marginTop: 14,
  },
  doctorAvatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 3,
    borderColor: '#B8CEF0',
  },
  doctorInfo: {
    flex: 1,
    gap: 6,
  },
  doctorName: {
    fontSize: 23,
    fontWeight: '800',
    color: '#0F172A',
  },
  doctorSpecialty: {
    fontSize: 18,
    fontWeight: '600',
    color: '#334155',
  },
  detailsSection: {
    width: '100%',
    gap: 20,
    paddingHorizontal: 12,
    marginTop: 14,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
  },
  detailText: {
    fontSize: 19,
    fontWeight: '700',
    color: '#0F172A',
  },
  bottomSection: {
    width: '100%',
    paddingBottom: 44, // Lifts button well up from bottom wave
    marginTop: 20,
  },
  viewAppointmentButton: {
    height: 60,
    borderRadius: 30,
    backgroundColor: '#2F36C6',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#2F36C6',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.35,
    shadowRadius: 7,
    elevation: 5,
  },
  viewAppointmentButtonText: {
    fontSize: 21,
    fontWeight: '800',
    color: '#FFFFFF',
  },
});

export default styles;
