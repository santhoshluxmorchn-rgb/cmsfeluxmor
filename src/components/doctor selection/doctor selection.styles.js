import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    paddingTop: '13%',
    paddingHorizontal: 16,
    paddingBottom: 16,
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
    width: 34,
  },
  tabsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#CBD5E1',
    marginBottom: 16,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
    position: 'relative',
  },
  activeTab: {},
  tabText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0F172A',
  },
  activeTabText: {
    color: '#2F36C6',
    fontWeight: '700',
  },
  activeIndicator: {
    position: 'absolute',
    bottom: -1,
    left: 10,
    right: 10,
    height: 2.5,
    backgroundColor: '#2F36C6',
    borderRadius: 2,
  },
  tabDivider: {
    width: 1,
    height: 22,
    backgroundColor: '#CBD5E1',
  },
  listContent: {
    paddingBottom: 24,
  },
  doctorCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 14,
    gap: 16,
  },
  selectedDoctorCard: {
    backgroundColor: '#D7E5FA',
  },
  avatar: {
    width: 68,
    height: 68,
    borderRadius: 34,
    borderWidth: 2,
    borderColor: '#B8CEF0',
  },
  infoWrapper: {
    flex: 1,
    gap: 2,
  },
  doctorName: {
    fontSize: 17,
    fontWeight: '700',
    color: '#0F172A',
  },
  specialtyText: {
    fontSize: 13.5,
    fontWeight: '600',
    color: '#475569',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginVertical: 2,
  },
  ratingScore: {
    fontSize: 13,
    fontWeight: '700',
    color: '#F59E0B',
  },
  reviewsText: {
    fontSize: 12.5,
    color: '#475569',
  },
  qualificationText: {
    fontSize: 11,
    color: '#64748B',
    lineHeight: 15,
  },
  separator: {
    height: 1,
    backgroundColor: '#CBD5E1',
    opacity: 0.8,
  },
});



export default styles;
