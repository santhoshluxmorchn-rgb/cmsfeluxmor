import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useUser } from '../../db';
import { getDoctors } from '../../db';
import styles from './appointment details - before confirmation.styles';

export default function AppointmentDetailsBeforeConfirmationScreen({ navigation, route }) {
  const { userData } = useUser();
  const defaultDoc = getDoctors()[0];

  const doctor = route?.params?.doctor || defaultDoc;
  const department = route?.params?.department || doctor.specialty || 'General Medicine';
  const appointmentDate = route?.params?.date || '14 Nov 2026';
  const appointmentTime = route?.params?.slot || '10:00 AM';
  const initialIssue = route?.params?.healthIssue || 'Fever and Body pain for 3 days.';

  const [healthIssue, setHealthIssue] = useState(initialIssue);

  const calculateAge = (dob) => {
    if (!dob) return 31;
    const match = dob.match(/\b(19\d{2}|20\d{2})\b/);
    if (match) {
      const year = parseInt(match[0], 10);
      return Math.max(1, 2026 - year);
    }
    return 31;
  };

  const patientAge = calculateAge(userData?.dob);
  const patientGender = userData?.gender || 'Male';
  const patientName = userData?.fullName || 'Daniel David';
  const patientId = userData?.patientId || 'LUXP012365';

  const DETAILS = [
    { label: 'Patient Name', value: patientName },
    { label: 'Patient ID', value: patientId },
    { label: 'Age / Gender', value: `${patientAge} yrs / ${patientGender}` },
    { label: 'Doctor', value: doctor.name },
    { label: 'Department', value: department },
    { label: 'Date', value: appointmentDate },
    { label: 'Time', value: appointmentTime },
  ];

  return (
    <ImageBackground
      source={require('../../assets/images/health-issues-bg.jpg')}
      style={styles.container}
      resizeMode="stretch"
    >
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
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

          <View style={styles.detailsCard}>
            {DETAILS.map((item) => (
              <View key={item.label} style={styles.detailRow}>
                <Text style={styles.detailLabel}>{item.label}</Text>
                <Text style={styles.colon}>:</Text>
                <Text style={styles.detailValue}>{item.value}</Text>
              </View>
            ))}
          </View>

          <View style={styles.healthIssueSection}>
            <Text style={styles.sectionLabel}>Health Issue</Text>
            <TextInput
              style={styles.issueInput}
              multiline
              numberOfLines={4}
              value={healthIssue}
              onChangeText={setHealthIssue}
              placeholder="Type your symptoms or health issue here..."
              placeholderTextColor="#64748B"
              textAlignVertical="top"
            />
          </View>

          <TouchableOpacity
            style={styles.continueButton}
            onPress={() => {
              navigation.navigate('ReviewAppointment', {
                patientName,
                patientId,
                patientAge,
                patientGender,
                doctor,
                department,
                appointmentDate,
                appointmentTime,
                healthIssue,
              });
            }}
            activeOpacity={0.8}
          >
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

