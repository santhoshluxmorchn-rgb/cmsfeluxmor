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
    fontFamily: fonts.headingBold,
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
    fontFamily: fonts.headingSemiBold,
    color: '#0F172A',
  },
  activeTabText: {
    color: '#2F36C6',
    fontFamily: fonts.headingBold,
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
    fontFamily: fonts.headingBold,
    color: '#0F172A',
  },
  specialtyText: {
    fontSize: 14,
    fontFamily: fonts.bodyMedium,
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
    fontFamily: fonts.bodyBold,
    color: '#F59E0B',
  },
  reviewsText: {
    fontSize: 12.5,
    fontFamily: fonts.bodyRegular,
    color: '#475569',
  },
  qualificationText: {
    fontSize: 11.5,
    fontFamily: fonts.bodyRegular,
    color: '#64748B',
    lineHeight: 16,
  },
  separator: {
    height: 1,
    backgroundColor: '#CBD5E1',
    opacity: 0.8,
  },
});

export default styles;
