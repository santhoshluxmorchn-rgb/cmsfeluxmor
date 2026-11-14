import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    paddingTop: '18%',
    paddingHorizontal: 20,
    paddingBottom: 36,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  backBtn: {
    padding: 6,
  },
  titleWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: '800',
    color: '#0F172A',
  },
  placeholder: {
    width: 36,
  },
  dateSubtitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#0F172A',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 32,
  },
  slotsContainer: {
    paddingBottom: 36,
    gap: 28,
  },
  section: {
    gap: 14,
  },
  sectionTitle: {
    fontSize: 21,
    fontWeight: '800',
    color: '#0F172A',
    paddingLeft: 4,
  },
  slotsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 18,
  },
  slotPill: {
    width: '48%',
    height: 64,
    borderRadius: 18,
    backgroundColor: '#BED8FB',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#2F36C6',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  selectedSlotPill: {
    backgroundColor: '#353EC8',
    shadowColor: '#353EC8',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  slotText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0F172A',
    letterSpacing: 0.5,
  },
  selectedSlotText: {
    color: '#FFFFFF',
    fontWeight: '800',
  },
});

export default styles;
