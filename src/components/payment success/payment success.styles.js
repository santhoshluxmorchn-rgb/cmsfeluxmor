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
    paddingBottom: 24,
    justifyContent: 'space-between',
  },
  topSection: {
    alignItems: 'center',
    gap: 16,
  },
  checkCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#22C55E',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#22C55E',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 6,
    marginBottom: 6,
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: '#16A34A',
    textAlign: 'center',
    letterSpacing: 0.2,
  },
  cardsContainer: {
    width: '100%',
    gap: 14,
    marginTop: 12,
  },
  infoCard: {
    backgroundColor: '#BED8FB',
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 20,
    gap: 6,
  },
  cardLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0F172A',
  },
  cardValue: {
    fontSize: 19,
    fontWeight: '700',
    color: '#0F172A',
  },
  bottomSection: {
    width: '100%',
    gap: 14,
    paddingBottom: 54, // Lifts the buttons well up from the bottom wave
    marginTop: 16,
  },
  downloadButton: {
    height: 54,
    borderRadius: 27,
    backgroundColor: '#2F36C6',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    shadowColor: '#2F36C6',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 3,
  },
  downloadButtonText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  viewButton: {
    height: 54,
    borderRadius: 27,
    backgroundColor: '#D4E4FC',
    borderWidth: 1.5,
    borderColor: '#3B4CCA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewButtonText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2F36C6',
  },
});

export default styles;

