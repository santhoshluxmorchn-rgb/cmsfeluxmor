import { StyleSheet } from 'react-native';

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
    fontWeight: '600',
    color: '#0F172A',
  },
  subtitle: {
    marginTop: 2,
    fontSize: 13,
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
    minHeight: 46,
    borderRadius: 14,
    backgroundColor: '#B8CEF0',
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  inputBody: {
    flex: 1,
  },
  label: {
    fontSize: 12,
    fontWeight: '500',
    color: '#0F172A',
  },
  required: {
    color: '#DC2626',
  },
  input: {
    padding: 0,
    marginTop: 1,
    fontSize: 13,
    color: '#0F172A',
  },
  selectHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  valueText: {
    marginTop: 1,
    fontSize: 13,
    color: '#0F172A',
  },
  placeholderText: {
    color: '#334155',
  },
  createButton: {
    marginTop: 12,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#2F36C6',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  createButtonText: {
    color: '#FFFFFF',
    fontSize: 19,
    fontWeight: '600',
  },
  footerRow: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#0F172A',
  },
  loginLink: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2F36C6',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    paddingHorizontal: 36,
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0F172A',
    marginBottom: 8,
  },
  modalItem: {
    paddingVertical: 10,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#E2E8F0',
  },
  modalItemText: {
    fontSize: 15,
    color: '#0F172A',
  },
});


export default styles;
