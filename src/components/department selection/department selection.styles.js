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
    width: 34,
  },
  subTitle: {
    fontSize: 13,
    color: '#2F36C6',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 12,
  },
  listContent: {
    paddingBottom: 20,
    gap: 16,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    gap: 14,
  },
  card: {
    flex: 1,
    maxWidth: '48%',
    backgroundColor: '#D7E5FA',
    borderRadius: 16,
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
    height: 94,
  },
  cardInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: '#D7E5FA',
    gap: 6,
  },
  iconWrapper: {
    width: 22,
    alignItems: 'center',
  },
  cardTitle: {
    flex: 1,
    fontSize: 11,
    fontWeight: '700',
    color: '#0F172A',
    lineHeight: 14,
  },
});



export default styles;
