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
    paddingBottom: 50,
    justifyContent: 'space-between',
  },
  topSection: {
    gap: 24,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
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
    fontWeight: '700',
    color: '#0F172A',
  },
  placeholder: {
    width: 36,
  },
  hospitalRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    paddingLeft: 4,
  },
  hospitalIconWrapper: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hospitalName: {
    fontSize: 21,
    fontWeight: '700',
    color: '#2F36C6',
    lineHeight: 26,
  },
  doctorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
    paddingLeft: 4,
    marginVertical: 4,
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
    fontSize: 21,
    fontWeight: '700',
    color: '#0F172A',
  },
  doctorSpecialty: {
    fontSize: 17,
    fontWeight: '600',
    color: '#475569',
  },
  scheduleSection: {
    gap: 16,
    paddingLeft: 6,
    marginVertical: 4,
  },
  scheduleItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  scheduleText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0F172A',
  },
  feeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 6,
    marginTop: 8,
  },
  feeLabel: {
    fontSize: 19,
    fontWeight: '700',
    color: '#0F172A',
  },
  feeAmount: {
    fontSize: 22,
    fontWeight: '800',
    color: '#0F172A',
  },
  patientCard: {
    backgroundColor: '#BED8FB',
    borderRadius: 16,
    paddingVertical: 18,
    paddingHorizontal: 20,
    gap: 8,
    marginTop: 6,
  },
  patientCardText: {
    fontSize: 17,
    fontWeight: '600',
    color: '#1E293B',
    lineHeight: 25,
  },
  bottomSection: {
    width: '100%',
    paddingBottom: 36, // Lifts the button well up from the bottom
    marginTop: 16,
  },
  confirmButton: {
    height: 56,
    borderRadius: 28,
    backgroundColor: '#2F36C6',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#2F36C6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  confirmButtonText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});

export default styles;
