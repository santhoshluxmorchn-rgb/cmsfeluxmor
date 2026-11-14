import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    paddingTop: '12%',
    paddingHorizontal: 18,
    paddingBottom: 20,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
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
    width: 32,
  },
  scrollContent: {
    paddingBottom: 24,
  },

  // Consulting Badge matching Figma
  consultingBadge: {
    backgroundColor: '#C8DDF8',
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  consultingText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0F172A',
  },

  // Section title
  selectNewDateLabel: {
    fontSize: 17,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 12,
  },

  // Calendar Card
  calendarCard: {
    backgroundColor: 'transparent',
    paddingHorizontal: 2,
    marginBottom: 24,
  },
  monthRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    marginBottom: 16,
  },
  navArrow: {
    padding: 6,
  },
  monthText: {
    fontSize: 19,
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
    fontSize: 14.5,
    fontWeight: '600',
    color: '#0F172A',
  },
  daysGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    rowGap: 8,
  },
  dayCell: {
    width: 44,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedDayCircle: {
    backgroundColor: '#2F36C6',
  },
  dayNumberText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#0F172A',
  },
  selectedDayNumberText: {
    color: '#FFFFFF',
    fontWeight: '700',
  },

  // Select Time Slot Button matching Figma
  selectTimeSlotButton: {
    height: 52,
    borderRadius: 14,
    backgroundColor: '#2F36C6',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#2F36C6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 3,
  },
  selectTimeSlotButtonText: {
    fontSize: 17,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});

export default styles;
