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
    paddingTop: '27.5%',
    paddingHorizontal: 14,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 2,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontFamily: fonts.headingBold,
    color: '#0F172A',
  },
  subtitle: {
    marginTop: 2,
    fontSize: 13,
    fontFamily: fonts.bodyRegular,
    lineHeight: 17,
    color: '#0F172A',
  },
  row: {
    flexDirection: 'row',
    gap: 8,
  },
  halfCard: {
    flex: 1,
  },
  inputCard: {
    marginTop: 8,
    minHeight: 48,
    borderRadius: 14,
    backgroundColor: '#C8DCF5',
    paddingHorizontal: 10,
    paddingVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  inputBody: {
    flex: 1,
  },
  label: {
    fontSize: 12,
    fontFamily: fonts.bodyMedium,
    color: '#0F172A',
  },
  required: {
    color: '#DC2626',
    fontFamily: fonts.bodyBold,
  },
  input: {
    padding: 0,
    marginTop: 1,
    fontSize: 14,
    fontFamily: fonts.bodyRegular,
    color: '#0F172A',
  },
  selectHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  valueText: {
    marginTop: 1,
    fontSize: 14,
    fontFamily: fonts.bodyMedium,
    color: '#0F172A',
  },
  placeholderText: {
    color: '#475569',
  },
  createButton: {
    marginTop: 14,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#2F36C6',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    shadowColor: '#2F36C6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 3,
  },
  createButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: fonts.headingBold,
  },
  footerRow: {
    marginTop: 12,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    fontSize: 14,
    fontFamily: fonts.bodyRegular,
    color: '#0F172A',
  },
  loginLink: {
    fontSize: 15,
    fontFamily: fonts.headingBold,
    color: '#2F36C6',
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(15, 23, 42, 0.45)',
    justifyContent: 'flex-end',
  },
  modalCard: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: 16,
    paddingBottom: 24,
    paddingHorizontal: 20,
    maxHeight: '60%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  modalTitle: {
    fontSize: 17,
    fontFamily: fonts.headingBold,
    color: '#0F172A',
  },
  modalOption: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  modalOptionText: {
    fontSize: 15,
    fontFamily: fonts.bodyMedium,
    color: '#0F172A',
  },
});

export default styles;
