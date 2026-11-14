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
    paddingHorizontal: 20,
    paddingBottom: 30,
    justifyContent: 'space-between',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  backBtn: {
    padding: 6,
  },
  titleWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#0F172A',
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  detailsContainer: {
    marginTop: '36%', // Light-ah mela lift panniyachu
    paddingHorizontal: 4,
    paddingBottom: 24,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 20,
  },
  stars: {
    flexDirection: 'row',
    gap: 4,
  },
  reviewText: {
    fontSize: 17,
    color: '#475569',
    fontWeight: '700',
  },
  infoList: {
    gap: 18,
    marginBottom: 30,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  infoText: {
    fontSize: 17,
    color: '#0F172A',
    fontWeight: '600',
    flexShrink: 1,
    lineHeight: 22,
  },
  mapButton: {
    height: 52,
    borderRadius: 26,
    backgroundColor: '#BED8FB',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 16,
  },
  mapButtonText: {
    fontSize: 18,
    color: '#2F36C6',
    fontWeight: '700',
  },
  bookButton: {
    height: 56,
    borderRadius: 28,
    backgroundColor: '#2F36C6',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    shadowColor: '#2F36C6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  bookButtonText: {
    fontSize: 19,
    color: '#FFFFFF',
    fontWeight: '700',
  },
});

export default styles;
