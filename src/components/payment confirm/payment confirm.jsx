import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  addAppointment,
  getAppointments,
  getDoctors,
} from '../../db';
import styles from './payment confirm.styles';

export default function PaymentConfirmScreen({ navigation, route }) {
  const defaultDoc = getDoctors()[0];
  const doctor = route?.params?.doctor || defaultDoc;
  const department = route?.params?.department || 'General Medicine';
  const appointmentDate = route?.params?.appointmentDate || '14 Nov 2026';
  const appointmentTime = route?.params?.appointmentTime || '10:00 AM';

  const bookingId = 'LUXAPP126647';
  const dateDisplay = `${appointmentDate},  Fri`;

  const handleViewAppointmentPress = () => {
    const all = getAppointments();
    const existing = all.find(
      (a) =>
        a.bookingId === bookingId ||
        (a.doctorName === doctor?.name &&
          a.date === `${appointmentDate}, ${appointmentTime}`)
    );
    if (!existing) {
      addAppointment({
        id: `apt-${Date.now()}`,
        bookingId,
        doctorName: doctor?.name || 'Dr. Priya menon',
        specialty: doctor?.specialty || department || 'General Physician',
        doctorImage: doctor?.image,
        date: `${appointmentDate}, ${appointmentTime}`,
        hospital: 'LUX Healthcare Hospital',
        status: 'Upcoming',
      });
    }
    navigation.navigate('UpcomingAppointment');
  };

  return (
    <ImageBackground
      source={require('../../assets/images/health-issues-bg.jpg')}
      style={styles.container}
      resizeMode="stretch"
    >
      <View style={styles.content}>
        <View style={styles.topSection}>
          <View style={styles.calendarIconWrapper}>
            <MaterialCommunityIcons
              name="calendar-check"
              size={96}
              color="#2F36C6"
            />
          </View>

          <Text style={styles.title}>Appointment Confirmed!</Text>

          <View style={styles.bookingIdBadge}>
            <Text style={styles.bookingIdText}>
              Booking ID:{bookingId}
            </Text>
          </View>

          <View style={styles.doctorRow}>
            <Image
              source={doctor?.image || defaultDoc.image}
              style={styles.doctorAvatar}
              resizeMode="cover"
            />
            <View style={styles.doctorInfo}>
              <Text style={styles.doctorName}>{doctor?.name}</Text>
              <Text style={styles.doctorSpecialty}>
                {doctor?.specialty || department}
              </Text>
            </View>
          </View>

          <View style={styles.detailsSection}>
            <View style={styles.detailItem}>
              <Feather name="calendar" size={26} color="#0F172A" />
              <Text style={styles.detailText}>{dateDisplay}</Text>
            </View>

            <View style={styles.detailItem}>
              <Feather name="clock" size={26} color="#0F172A" />
              <Text style={styles.detailText}>{appointmentTime}</Text>
            </View>

            <View style={styles.detailItem}>
              <Ionicons name="location-outline" size={28} color="#0F172A" />
              <Text style={styles.detailText}>LUX Healthcare Hospital</Text>
            </View>
          </View>
        </View>

        <View style={styles.bottomSection}>
          <TouchableOpacity
            style={styles.viewAppointmentButton}
            onPress={handleViewAppointmentPress}
            activeOpacity={0.8}
          >
            <Text style={styles.viewAppointmentButtonText}>
              View Appointment
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

