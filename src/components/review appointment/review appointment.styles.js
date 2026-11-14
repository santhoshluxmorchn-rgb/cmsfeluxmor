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
    paddingBottom: 50,
    justifyContent: 'space-between',
  },
  topSection: {
    gap: 20,
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
    fontSize: 22,
    fontFamily: fonts.headingBold,
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
    fontSize: 19,
    fontFamily: fonts.headingBold,
    color: '#2F36C6',
    lineHeight: 24,
  },
  doctorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
    paddingLeft: 4,
    marginVertical: 4,
  },
  doctorAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2.5,
    borderColor: '#B8CEF0',
  },
  doctorInfo: {
    flex: 1,
    gap: 4,
  },
  doctorName: {
    fontSize: 19,
    fontFamily: fonts.headingBold,
    color: '#0F172A',
  },
  doctorSpecialty: {
    fontSize: 15,
    fontFamily: fonts.bodyMedium,
    color: '#475569',
  },
  scheduleSection: {
    gap: 14,
    paddingLeft: 6,
    marginVertical: 4,
  },
  scheduleItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  scheduleText: {
    fontSize: 16,
    fontFamily: fonts.bodyMedium,
    color: '#0F172A',
  },
  feeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 6,
    marginTop: 6,
  },
  feeLabel: {
    fontSize: 17,
    fontFamily: fonts.headingBold,
    color: '#0F172A',
  },
  feeAmount: {
    fontSize: 20,
    fontFamily: fonts.headingBold,
    color: '#0F172A',
  },
  patientCard: {
    backgroundColor: '#BED8FB',
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 18,
    gap: 6,
    marginTop: 6,
  },
  patientCardText: {
    fontSize: 15,
    fontFamily: fonts.bodyRegular,
    color: '#1E293B',
    lineHeight: 22,
  },
  bottomSection: {
    width: '100%',
    paddingBottom: 36,
    marginTop: 16,
  },
  confirmButton: {
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
  confirmButtonText: {
    fontSize: 18,
    fontFamily: fonts.headingBold,
    color: '#FFFFFF',
  },
});

export default styles;
