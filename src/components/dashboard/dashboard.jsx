import {
  Feather,
  FontAwesome5,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BottomNav from '../../navigation/BottomNav';
import { useUser } from '../../db';
import { getDashboardServices, getHospitalInfo } from '../../db';
import styles from './dashboard.styles';

export default function DashboardScreen({ navigation }) {
  const { userData } = useUser();
  const userName = userData.fullName || 'Daniel';
  const hospitalInfo = getHospitalInfo();
  const menuItems = getDashboardServices();

  const renderIcon = (item) => {
    if (item.lib === 'fa5') {
      return <FontAwesome5 name={item.icon} size={32} color="#0F172A" />;
    }
    if (item.lib === 'feather') {
      return <Feather name={item.icon} size={32} color="#0F172A" />;
    }
    return <MaterialCommunityIcons name={item.icon} size={35} color="#0F172A" />;
  };

  return (
    <ImageBackground
      source={require('../../assets/images/dashboard-bg.jpg')}
      style={styles.container}
      resizeMode="stretch"
    >
      <View style={styles.content}>
        <View style={styles.headerRow}>
          <View>
            <View style={styles.greetingRow}>
              <Text style={styles.greeting}>Hello, {userName}</Text>
              <Text style={styles.wave}> 👋</Text>
            </View>
            <Text style={styles.subGreeting}>
              Welcome to {hospitalInfo?.name || 'Healthcare Hospital'}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Profile', { userName })}
          >
            <Image
              source={require('../../assets/images/avatar.jpg')}
              style={styles.avatar}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.grid}>
          {menuItems.map((item) => (
            <TouchableOpacity
              key={item.key}
              style={styles.card}
              onPress={() => {
                if (item.target) {
                  const targetScreen =
                    item.target === 'HospitalDetail'
                      ? 'BookAppointmentHome'
                      : item.target === 'SelectHealthIssue'
                      ? 'HealthIssueSelection'
                      : item.target === 'MyAppointments'
                      ? 'UpcomingAppointment'
                      : item.target;
                  navigation.navigate(targetScreen, { userName });
                }
              }}
              activeOpacity={0.8}
            >
              <View style={styles.iconCircle}>{renderIcon(item)}</View>
              <Text style={styles.cardText}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <BottomNav
        activeTab="Home"
        navigation={navigation}
        userName={userName}
      />
    </ImageBackground>
  );
}

