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
    gap: 20,
  },
  topRow: {
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
  placeholder: {
    width: 36,
  },
  billCard: {
    gap: 12,
    marginTop: 6,
  },
  billRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 4,
  },
  billLabel: {
    fontSize: 16,
    fontFamily: fonts.bodyMedium,
    color: '#0F172A',
  },
  billValue: {
    fontSize: 16,
    fontFamily: fonts.headingSemiBold,
    color: '#0F172A',
  },
  divider: {
    height: 1,
    backgroundColor: '#CBD5E1',
    opacity: 0.7,
  },
  totalPayableBanner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#16A34A',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 18,
    marginTop: 8,
    shadowColor: '#16A34A',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 3,
  },
  totalLabel: {
    fontSize: 17,
    fontFamily: fonts.headingBold,
    color: '#FFFFFF',
  },
  totalValue: {
    fontSize: 19,
    fontFamily: fonts.headingBold,
    color: '#FFFFFF',
  },
  methodSection: {
    gap: 14,
    marginTop: 10,
  },
  methodSectionTitle: {
    fontSize: 17,
    fontFamily: fonts.headingBold,
    color: '#0F172A',
    marginBottom: 4,
    paddingLeft: 2,
  },
  methodOption: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  radioOuter: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: '#0F172A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioOuterSelected: {
    borderColor: '#2F36C6',
  },
  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#2F36C6',
  },
  methodLabel: {
    fontSize: 16,
    fontFamily: fonts.bodyMedium,
    color: '#0F172A',
  },
  razorpayBadge: {
    backgroundColor: '#0284C7',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    marginLeft: 6,
  },
  razorpayBadgeText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontFamily: fonts.headingBold,
  },
  bottomSection: {
    width: '100%',
    paddingBottom: 32,
    marginTop: 16,
  },
  payButton: {
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
  payButtonText: {
    fontSize: 18,
    fontFamily: fonts.headingBold,
    color: '#FFFFFF',
  },
});

export default styles;
