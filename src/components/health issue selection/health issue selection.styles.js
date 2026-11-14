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
    paddingTop: '12%',
    paddingHorizontal: 14,
    paddingBottom: 16,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  backBtn: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 22,
    fontFamily: fonts.headingBold,
    color: '#0F172A',
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 13.5,
    fontFamily: fonts.bodyRegular,
    color: '#475569',
    textAlign: 'center',
    marginTop: 4,
    marginBottom: 10,
    lineHeight: 18,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#2F36C6',
    borderRadius: 22,
    paddingHorizontal: 14,
    height: 42,
    marginBottom: 14,
    gap: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    fontFamily: fonts.bodyRegular,
    color: '#0F172A',
    paddingVertical: 0,
  },
  listContent: {
    paddingBottom: 24,
    gap: 10,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    gap: 8,
  },
  card: {
    flex: 1,
    maxWidth: '32%',
    backgroundColor: '#D7E5FA',
    borderRadius: 14,
    overflow: 'hidden',
    borderWidth: 1.5,
    borderColor: 'transparent',
  },
  selectedCard: {
    borderColor: '#2F36C6',
    backgroundColor: '#C5DCFA',
  },
  cardImage: {
    width: '100%',
    height: 60,
  },
  cardInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 6,
    paddingVertical: 5,
    backgroundColor: '#D7E5FA',
  },
  textContainer: {
    flex: 1,
    marginRight: 2,
  },
  cardTitle: {
    fontSize: 11,
    fontFamily: fonts.headingBold,
    color: '#2F36C6',
  },
  cardDesc: {
    fontSize: 11,
    fontFamily: fonts.bodyRegular,
    color: '#475569',
    marginTop: 1,
  },
  viewMoreButton: {
    height: 48,
    borderRadius: 14,
    backgroundColor: '#2F36C6',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 22,
    marginBottom: 20,
    shadowColor: '#2F36C6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 3,
  },
  viewMoreText: {
    fontSize: 16,
    fontFamily: fonts.headingBold,
    color: '#FFFFFF',
  },
});

export default styles;
