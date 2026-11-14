import { Ionicons } from '@expo/vector-icons';
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { getDoctors } from '../../db';
import styles from './appointment details - after confirmation.styles';

export default function AppointmentDetailsAfterConfirmationScreen({ navigation, route }) {
  const appointment = route?.params?.appointment;
  const defaultDoc = getDoctors()[0];

  const doctor =
    appointment?.doctor ||
    (appointment?.doctorName
      ? {
          name: appointment.doctorName,
          specialty: appointment.specialty,
          image: appointment.doctorImage,
        }
      : defaultDoc);

  const bookingId = appointment?.bookingId || 'LUXAP125687';
  const displayDate = appointment?.date || '14 Nov 2026, 10:00 AM';
  const hospitalName = appointment?.hospital || 'LUX Healthcare Hospital';
  const amountVal = appointment?.amount
    ? Number(appointment.amount).toFixed(2)
    : '743.00';
  const statusText =
    appointment?.status === 'Upcoming'
      ? 'Confirmed'
      : appointment?.status || 'Confirmed';

  const handleAddToCalendar = () => {
    navigation.navigate('reschedule appointment', {
      appointment,
      rescheduleAptId: appointment?.id || 'apt-101',
      doctor: {
        name: appointment?.doctorName || doctor?.name || 'Dr. Priya Menon',
        specialty: appointment?.specialty || doctor?.specialty || 'General Physician',
        image: appointment?.doctorImage || doctor?.image || defaultDoc.image,
      },
      department: appointment?.specialty || 'General Medicine',
    });
  };

  return (
    <ImageBackground
      source={require('../../assets/images/health-issues-bg.jpg')}
      style={styles.container}
      resizeMode="stretch"
    >
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.topRow}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => navigation.goBack()}
            activeOpacity={0.7}
          >
            <Ionicons name="chevron-back" size={26} color="#2F36C6" />
          </TouchableOpacity>
          <View style={styles.titleWrapper}>
            <Text style={styles.headerTitle}>Appointment Details</Text>
          </View>
          <View style={styles.placeholder} />
        </View>

        <View style={styles.doctorProfileSection}>
          <Image
            source={appointment?.doctorImage || doctor?.image || defaultDoc.image}
            style={styles.doctorLargeAvatar}
            resizeMode="cover"
          />
          <Text style={styles.doctorLargeName}>
            {appointment?.doctorName || doctor?.name}
          </Text>
          <Text style={styles.doctorLargeSpecialty}>
            {appointment?.specialty || doctor?.specialty}
          </Text>
        </View>

        <View style={styles.detailsCard}>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Booking ID</Text>
            <Text style={styles.colon}>:</Text>
            <Text style={styles.detailValue}>{bookingId}</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Date & Time</Text>
            <Text style={styles.colon}>:</Text>
            <Text style={styles.detailValue}>{displayDate}</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Hospital</Text>
            <Text style={styles.colon}>:</Text>
            <Text style={styles.detailValue}>{hospitalName}</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Payment</Text>
            <Text style={styles.colon}>:</Text>
            <View style={styles.paymentValueRow}>
              <Text style={styles.paidLabel}>Paid</Text>
              <Text style={styles.paidAmount}>₹{amountVal}</Text>
            </View>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Status</Text>
            <Text style={styles.colon}>:</Text>
            <View
              style={[
                styles.statusBadge,
                statusText === 'Confirmed' && styles.statusBadgeConfirmed,
                statusText === 'Completed' && styles.statusBadgeCompleted,
                statusText === 'Canceled' && styles.statusBadgeCanceled,
              ]}
            >
              <Text
                style={[
                  styles.statusBadgeText,
                  statusText === 'Confirmed' && styles.statusBadgeTextConfirmed,
                  statusText === 'Completed' && styles.statusBadgeTextCompleted,
                  statusText === 'Canceled' && styles.statusBadgeTextCanceled,
                ]}
              >
                {statusText}
              </Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={styles.addToCalendarButton}
          onPress={handleAddToCalendar}
          activeOpacity={0.85}
        >
          <Text style={styles.addToCalendarButtonText}>
            Add to Calendar
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
}

