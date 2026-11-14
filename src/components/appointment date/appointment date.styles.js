import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? '16%' : '14%',
    paddingHorizontal: 18,
    paddingBottom: 24,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  backBtn: {
    padding: 4,
  },
  titleWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#0F172A',
  },
  placeholder: {
    width: 34,
  },
  subHeader: {
    fontSize: 15,
    fontWeight: '600',
    color: '#334155',
    textAlign: 'center',
    marginTop: 4,
  },
  selectNewDateLabel: {
    fontSize: 17,
    fontWeight: '700',
    color: '#0F172A',
    marginTop: 10,
    marginBottom: 4,
  },
  calendarCard: {
    backgroundColor: 'transparent',
    paddingHorizontal: 2,
  },
  monthRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 24,
    marginBottom: 18,
    marginTop: 10,
  },
  navArrow: {
    padding: 6,
  },
  monthText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0F172A',
  },
  weekRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 12,
  },
  dayLabel: {
    width: 44,
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '600',
    color: '#0F172A',
  },
  daysGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    rowGap: 10,
  },
  dayCell: {
    width: 44,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedDayCircle: {
    backgroundColor: '#353EC8',
  },
  dayNumberText: {
    fontSize: 16.5,
    fontWeight: '500',
    color: '#0F172A',
  },
  sundayDayNumber: {
    color: '#0F172A',
  },
  selectedDayNumberText: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
  legendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 36,
    marginTop: 18,
    marginBottom: 6,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  legendText: {
    fontSize: 15,
    color: '#0F172A',
    fontWeight: '600',
  },
  selectTimeSlotButton: {
    height: 52,
    borderRadius: 14,
    backgroundColor: '#2F36C6',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    shadowColor: '#2F36C6',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
  selectTimeSlotButtonDisabled: {
    backgroundColor: '#94A3B8',
    shadowOpacity: 0,
  },
  selectTimeSlotButtonText: {
    fontSize: 17,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});

export default styles;
