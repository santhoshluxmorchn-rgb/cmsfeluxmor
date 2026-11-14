import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useUser } from '../../db';
import { getDoctors, getHospitalInfo } from '../../db';
import styles from './review appointment.styles';

export default function ReviewAppointmentScreen({ navigation, route }) {
  const { userData } = useUser();
  const defaultDoc = getDoctors()[0];
  const hospitalInfo = getHospitalInfo();

  const doctor = route?.params?.doctor || defaultDoc;
  const department = route?.params?.department || 'General Medicine';
  const appointmentDate = route?.params?.appointmentDate || '14 Nov 2026';
  const appointmentTime = route?.params?.appointmentTime || '10:00 AM';
  const healthIssue = route?.params?.healthIssue || '';
  const consultationFee = doctor?.consultationFee || 600;

  const patientName = route?.params?.patientName || userData?.fullName || 'Daniel David';
  const patientId = route?.params?.patientId || userData?.patientId || 'LUXPP012365';
  const dateDisplay = route?.params?.fullDateStr || `${appointmentDate}, Fri`;

  return (
    <ImageBackground
      source={require('../../assets/images/health-issues-bg.jpg')}
      style={styles.container}
      resizeMode="stretch"
    >
      <View style={styles.content}>
        <View style={styles.topSection}>
          <View style={styles.topRow}>
            <TouchableOpacity
              style={styles.backBtn}
              onPress={() => navigation.goBack()}
              activeOpacity={0.7}
            >
              <Ionicons name="chevron-back" size={28} color="#2F36C6" />
            </TouchableOpacity>
            <View style={styles.titleWrapper}>
              <Text style={styles.headerTitle}>Review Appointment</Text>
            </View>
            <View style={styles.placeholder} />
          </View>

          <View style={styles.hospitalRow}>
            <View style={styles.hospitalIconWrapper}>
              <MaterialCommunityIcons
                name="cross-outline"
                size={46}
                color="#2F36C6"
              />
            </View>
            <Text style={styles.hospitalName}>
              {hospitalInfo?.name ? `${hospitalInfo.name.replace('Hospital', '')}\nHospital` : `LUX Healthcare\nHospital`}
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

          <View style={styles.scheduleSection}>
            <View style={styles.scheduleItem}>
              <Feather name="calendar" size={24} color="#0F172A" />
              <Text style={styles.scheduleText}>{dateDisplay}</Text>
            </View>
            <View style={styles.scheduleItem}>
              <Feather name="clock" size={24} color="#0F172A" />
              <Text style={styles.scheduleText}>{appointmentTime}</Text>
            </View>
          </View>

          <View style={styles.feeRow}>
            <Text style={styles.feeLabel}>Consultation Free</Text>
            <Text style={styles.feeAmount}>₹{consultationFee}</Text>
          </View>

          <View style={styles.patientCard}>
            <Text style={styles.patientCardText}>Patient: {patientName}</Text>
            <Text style={styles.patientCardText}>Patient: {patientId}</Text>
          </View>
        </View>

        <View style={styles.bottomSection}>
          <TouchableOpacity
            style={styles.confirmButton}
            onPress={() => {
              navigation.navigate('PaymentDetails', {
                patientName,
                patientId,
                doctor,
                department,
                appointmentDate,
                appointmentTime,
                healthIssue,
                consultationFee,
              });
            }}
            activeOpacity={0.8}
          >
            <Text style={styles.confirmButtonText}>Confirm Appointment</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

