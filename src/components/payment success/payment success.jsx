import { Feather, Ionicons } from '@expo/vector-icons';
import {
  Alert,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './payment success.styles';

export default function PaymentSuccessScreen({ navigation, route }) {
  const patientName = route?.params?.patientName || 'Daniel David';
  const patientId = route?.params?.patientId || 'LUXPP012365';
  const doctor = route?.params?.doctor || { name: 'Dr. Priya Menon' };
  const department = route?.params?.department || 'General Medicine';
  const appointmentDate = route?.params?.appointmentDate || '14 Nov 2026';
  const appointmentTime = route?.params?.appointmentTime || '10:00 AM';
  const healthIssue = route?.params?.healthIssue || '';
  const consultationFee = Number(
    route?.params?.consultationFee || doctor?.consultationFee || 600
  );
  const totalPaid =
    route?.params?.totalPaid || (consultationFee + 43).toFixed(2);
  const paymentMethod = route?.params?.paymentMethod || 'UPI';

  const transactionId = 'TNBPTT25655';
  const paymentDate = `${appointmentDate}, ${appointmentTime}`;

  const handleDownloadReceipt = () => {
    Alert.alert(
      'Receipt Downloaded',
      `Receipt for Transaction #${transactionId} (₹${totalPaid}) has been downloaded successfully.`,
      [{ text: 'OK' }]
    );
  };

  const handleViewAppointment = () => {
    navigation.navigate('PaymentConfirm', {
      patientName,
      patientId,
      doctor,
      department,
      appointmentDate,
      appointmentTime,
      healthIssue,
      consultationFee,
      totalPaid,
      paymentMethod,
      transactionId,
    });
  };

  return (
    <ImageBackground
      source={require('../../assets/images/health-issues-bg.jpg')}
      style={styles.container}
      resizeMode="stretch"
    >
      <View style={styles.content}>
        <View style={styles.topSection}>
          <View style={styles.checkCircle}>
            <Ionicons name="checkmark" size={56} color="#FFFFFF" />
          </View>
          <Text style={styles.title}>Payment Successful!</Text>

          <View style={styles.cardsContainer}>
            <View style={styles.infoCard}>
              <Text style={styles.cardLabel}>Transaction ID</Text>
              <Text style={styles.cardValue}>{transactionId}</Text>
            </View>

            <View style={styles.infoCard}>
              <Text style={styles.cardLabel}>Amount Paid</Text>
              <Text style={styles.cardValue}>₹ {totalPaid}</Text>
            </View>

            <View style={styles.infoCard}>
              <Text style={styles.cardLabel}>Payment Date</Text>
              <Text style={styles.cardValue}>{paymentDate}</Text>
            </View>
          </View>
        </View>

        <View style={styles.bottomSection}>
          <TouchableOpacity
            style={styles.downloadButton}
            onPress={handleDownloadReceipt}
            activeOpacity={0.8}
          >
            <Feather name="download" size={22} color="#FFFFFF" />
            <Text style={styles.downloadButtonText}>Download Receipt</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.viewButton}
            onPress={handleViewAppointment}
            activeOpacity={0.8}
          >
            <Text style={styles.viewButtonText}>View Appointment</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

