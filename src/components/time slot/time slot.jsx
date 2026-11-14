import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import {
  Alert,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { getTimeSlots, updateAppointment } from '../../db';
import styles from './time slot.styles';

const TIME_SLOTS = getTimeSlots();

export default function TimeSlotScreen({ navigation, route }) {
  const userName = route?.params?.userName || 'Daniel';
  const doctor = route?.params?.doctor || {
    name: 'Dr. Priya Menon',
    specialty: 'General Physician',
  };
  const department = route?.params?.department || 'General Medicine';
  const healthIssue = route?.params?.healthIssue || '';
  const dateStr = route?.params?.fullDateStr || '14 Nov 2026, Friday';
  const isReschedule = route?.params?.isReschedule || false;
  const rescheduleAptId = route?.params?.rescheduleAptId || 'apt-101';

  const [selectedSlot, setSelectedSlot] = useState('02:00 PM');

  const handleSlotSelect = (time) => {
    setSelectedSlot(time);

    if (isReschedule) {
      const newDateTimeStr = `${route?.params?.date || dateStr}, ${time}`;

      Alert.alert(
        'Confirm Reschedule',
        `Reschedule your appointment with ${doctor.name} to:\n${newDateTimeStr}?`,
        [
          { text: 'Cancel', style: 'cancel' },
          {
            text: 'Confirm',
            onPress: () => {
              updateAppointment(rescheduleAptId, {
                date: newDateTimeStr,
              });
              Alert.alert(
                'Success',
                `Appointment rescheduled successfully to:\n${newDateTimeStr}`,
                [
                  {
                    text: 'OK',
                    onPress: () =>
                      navigation.navigate('upcoming appointment', {
                        defaultTab: 'upcoming',
                      }),
                  },
                ]
              );
            },
          },
        ]
      );
      return;
    }

    navigation.navigate('appointment details - before confirmation', {
      userName,
      doctor,
      department,
      healthIssue,
      date: route?.params?.date || '14 Nov 2026',
      fullDateStr: dateStr,
      slot: time,
    });
  };

  const renderSlotPill = (time) => {
    const isSelected = selectedSlot === time;
    return (
      <TouchableOpacity
        key={time}
        style={[styles.slotPill, isSelected && styles.selectedSlotPill]}
        onPress={() => handleSlotSelect(time)}
        activeOpacity={0.75}
      >
        <Text
          style={[styles.slotText, isSelected && styles.selectedSlotText]}
        >
          {time}
        </Text>
      </TouchableOpacity>
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
            <Text style={styles.headerTitle}>Select Time Slot</Text>
          </View>
          <View style={styles.placeholder} />
        </View>

        <Text style={styles.dateSubtitle}>{dateStr}</Text>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.slotsContainer}
        >
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Morning</Text>
            <View style={styles.slotsGrid}>
              {TIME_SLOTS.morning.map(renderSlotPill)}
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Afternoon</Text>
            <View style={styles.slotsGrid}>
              {TIME_SLOTS.afternoon.map(renderSlotPill)}
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Evening</Text>
            <View style={styles.slotsGrid}>
              {TIME_SLOTS.evening.map(renderSlotPill)}
            </View>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}
