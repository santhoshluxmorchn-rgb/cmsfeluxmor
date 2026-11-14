import { Feather, Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import {
  Alert,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { getCancellationConfig, updateAppointment } from '../../db';
import styles from './cancel appointment.styles';

export default function CancelAppointmentScreen({ navigation, route }) {
  const appointmentId = route?.params?.appointmentId || 'apt-101';
  const bookingId = route?.params?.bookingId || 'LUXAP125687';

  const cancellationConfig = getCancellationConfig();
  const reasonsList = cancellationConfig?.reasons || [
    'Schedule not suitable',
    'Facing other',
    'Booked by mistake',
    'Other',
  ];
  const noticeText =
    cancellationConfig?.notice ||
    '5 - 10 minutes for appointment\ncancellation may apply';

  const [selectedReason, setSelectedReason] = useState(reasonsList[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);

  const handleSelectReason = (reason) => {
    setSelectedReason(reason);
  };

  const handleConfirmCancellation = () => {
    Alert.alert(
      'Cancel Appointment',
      'Are you sure you want to cancel this appointment?',
      [
        { text: 'No', style: 'cancel' },
        {
          text: 'Yes, Cancel',
          style: 'destructive',
          onPress: () => {
            updateAppointment(appointmentId, {
              status: 'Canceled',
              cancelReason: selectedReason,
            });

            Alert.alert(
              'Appointment Canceled',
              'Your appointment has been successfully canceled.',
              [
                {
                  text: 'OK',
                  onPress: () =>
                    navigation.navigate('upcoming appointment', {
                      defaultTab: 'canceled',
                    }),
                },
              ]
            );
          },
        },
      ]
    );
  };

  return (
    <ImageBackground
      source={require('../../assets/images/health-issues-bg.jpg')}
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.content}>
        <View style={styles.topRow}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => navigation.goBack()}
            activeOpacity={0.7}
          >
            <Ionicons name="chevron-back" size={26} color="#2F36C6" />
          </TouchableOpacity>
          <View style={styles.titleWrapper}>
            <Text style={styles.headerTitle}>Cancel Appointment</Text>
          </View>
          <View style={styles.placeholder} />
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Booking ID Badge */}
          <View style={styles.bookingIdBadge}>
            <Text style={styles.bookingIdText}>
              Booking ID: {bookingId}
            </Text>
          </View>

          {/* Reason for Cancellation Label */}
          <Text style={styles.sectionTitle}>Reason for Cancellation</Text>

          {/* Dropdown Container */}
          <View style={styles.dropdownCard}>
            <TouchableOpacity
              style={styles.dropdownHeader}
              onPress={() => setIsDropdownOpen((prev) => !prev)}
              activeOpacity={0.8}
            >
              <Text style={styles.dropdownHeaderText}>
                Select a Reason
              </Text>
              <Feather
                name={isDropdownOpen ? 'chevron-up' : 'chevron-down'}
                size={22}
                color="#0F172A"
              />
            </TouchableOpacity>

            {isDropdownOpen && (
              <View style={styles.optionsList}>
                {reasonsList.map((reason) => {
                  const isSelected = selectedReason === reason;
                  return (
                    <TouchableOpacity
                      key={reason}
                      style={styles.optionItem}
                      onPress={() => handleSelectReason(reason)}
                      activeOpacity={0.7}
                    >
                      <Text
                        style={[
                          styles.optionText,
                          isSelected && styles.optionTextSelected,
                        ]}
                      >
                        {reason}
                      </Text>
                      {isSelected && (
                        <Ionicons
                          name="checkmark"
                          size={18}
                          color="#2F36C6"
                        />
                      )}
                    </TouchableOpacity>
                  );
                })}
              </View>
            )}
          </View>

          {/* Yellow Warning Notice Box */}
          <View style={styles.warningBox}>
            <View style={styles.warningIconWrapper}>
              <Ionicons name="alert-circle" size={26} color="#B45309" />
            </View>
            <Text style={styles.warningText}>{noticeText}</Text>
          </View>

          {/* Red Cancel Button */}
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={handleConfirmCancellation}
            activeOpacity={0.85}
          >
            <Text style={styles.cancelButtonText}>Cancel Appointment</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}
