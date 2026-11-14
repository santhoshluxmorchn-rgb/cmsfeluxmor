import { Feather } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './BottomNav.styles';

const TABS = [
  { key: 'Home', label: 'Home', icon: 'home' },
  { key: 'Appointments', label: 'Appointments', icon: 'calendar' },
  { key: 'Payments', label: 'Payments', icon: 'credit-card' },
  { key: 'Profile', label: 'Profile', icon: 'user' },
];

export default function BottomNav({ activeTab = 'Home', navigation, userName }) {
  return (
    <View style={styles.container}>
      {TABS.map((tab) => {
        const isActive = activeTab === tab.key;
        return (
          <TouchableOpacity
            key={tab.key}
            style={styles.tab}
            onPress={() => {
              if (tab.key === 'Profile') {
                navigation.navigate('Profile', { userName });
              } else if (tab.key === 'Home') {
                navigation.navigate('Dashboard', { userName });
              } else if (tab.key === 'Appointments') {
                navigation.navigate('UpcomingAppointment', { userName });
              }
            }}
            activeOpacity={0.7}
          >
            <Feather
              name={tab.icon}
              size={20}
              color={isActive ? '#2F36C6' : '#475569'}
            />
            <Text
              style={[
                styles.label,
                { color: isActive ? '#2F36C6' : '#475569' },
              ]}
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

