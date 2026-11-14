import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    paddingTop: '24%',
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  notificationBtn: {
    marginTop: 22,
    marginLeft: 4,
    padding: 4,
  },
  userHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginBottom: 16,
    paddingHorizontal: 2,
  },
  avatar: {
    width: 94,
    height: 94,
    borderRadius: 47,
    borderWidth: 3,
    borderColor: '#FFFFFF',
  },
  userInfo: {
    flex: 1,
    gap: 4,
  },
  profileHeading: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0F172A',
  },
  userName: {
    fontSize: 22,
    fontWeight: '700',
    color: '#2F36C6',
  },
  idRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  patientId: {
    fontSize: 15,
    color: '#475569',
    fontWeight: '600',
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 4,
    backgroundColor: '#BBF7D0',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 14,
    alignSelf: 'flex-start',
  },
  badgeText: {
    fontSize: 13.5,
    color: '#15803D',
    fontWeight: '700',
  },
  detailsCard: {
    backgroundColor: '#B8CEF0',
    borderRadius: 18,
    paddingVertical: 14,
    paddingHorizontal: 18,
    gap: 7,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  divider: {
    height: 1,
    backgroundColor: '#CBD5E1',
    opacity: 0.6,
  },
  detailLabel: {
    width: 115,
    fontSize: 13.5,
    color: '#0F172A',
    fontWeight: '600',
  },
  detailValue: {
    flex: 1,
    fontSize: 13.5,
    color: '#0F172A',
    fontWeight: '500',
  },
  editButton: {
    marginTop: 14,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#2F36C6',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  editButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  actionRow: {
    marginTop: 14,
    flexDirection: 'row',
    gap: 10,
  },
  actionCard: {
    flex: 1,
    height: 90,
    backgroundColor: '#B8CEF0',
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 6,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  actionText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#0F172A',
    textAlign: 'center',
    lineHeight: 15,
  },
});


export default styles;
