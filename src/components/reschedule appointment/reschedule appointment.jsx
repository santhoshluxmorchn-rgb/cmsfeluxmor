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
import styles from './reschedule appointment.styles';

const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function RescheduleAppointmentScreen({ navigation, route }) {
  const rescheduleAptId = route?.params?.rescheduleAptId || 'apt-101';
  const doctor = route?.params?.doctor || {
    name: 'Dr. Priya Menon',
    specialty: 'General Physician',
  };

  const [currentYear, setCurrentYear] = useState(2026);
  const [currentMonth, setCurrentMonth] = useState(10); // November
  const [selectedDate, setSelectedDate] = useState(10); // default 10 Nov as in Figma

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((y) => y - 1);
    } else {
      setCurrentMonth((m) => m - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else {
      setCurrentMonth((m) => m + 1);
    }
  };

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const getFirstDayIndex = () => {
    if (currentYear === 2026 && currentMonth === 10) return 6; // Starts on Sun
    return new Date(currentYear, currentMonth, 1).getDay();
  };
  const firstDayIndex = getFirstDayIndex();

  const getDayName = (day) => {
    const cellIdx = day + firstDayIndex - 1;
    const dow = cellIdx % 7;
    return DAYS_OF_WEEK[dow];
  };

  const handleSelectTimeSlot = () => {
    if (!selectedDate) {
      Alert.alert('Select Date', 'Please select a new date from the calendar.');
      return;
    }
    const dayName = getDayName(selectedDate);
    const dateFormatted = `${selectedDate} ${MONTH_NAMES[currentMonth].slice(0, 3)} ${currentYear}`;
    const fullDate = `${selectedDate} ${MONTH_NAMES[currentMonth].slice(0, 3)} ${currentYear}, ${dayName}`;

    // Navigate to full screen time slot
    navigation.navigate('time slot', {
      isReschedule: true,
      rescheduleAptId,
      doctor,
      date: dateFormatted,
      fullDateStr: fullDate,
    });
  };

  const totalSlots = Math.ceil((firstDayIndex + daysInMonth) / 7) * 7;
  const calendarDays = [];
  for (let i = 0; i < totalSlots; i++) {
    const dayNumber = i - firstDayIndex + 1;
    if (dayNumber > 0 && dayNumber <= daysInMonth) {
      calendarDays.push(dayNumber);
    } else {
      calendarDays.push(null);
    }
  }

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
            <Text style={styles.headerTitle}>Reschedule Appointment</Text>
          </View>
          <View style={styles.placeholder} />
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Subtitle Pill Badge matching Figma */}
          <View style={styles.consultingBadge}>
            <Text style={styles.consultingText}>
              Consulting {doctor.name || 'Dr. DANA 3047'}
            </Text>
          </View>

          {/* Title matching Figma */}
          <Text style={styles.selectNewDateLabel}>Select New Date</Text>

          {/* Calendar Card */}
          <View style={styles.calendarCard}>
            {/* Month Navigation */}
            <View style={styles.monthRow}>
              <TouchableOpacity onPress={handlePrevMonth} style={styles.navArrow}>
                <Feather name="chevron-left" size={24} color="#0F172A" />
              </TouchableOpacity>
              <Text style={styles.monthText}>
                {MONTH_NAMES[currentMonth]} {currentYear}
              </Text>
              <TouchableOpacity onPress={handleNextMonth} style={styles.navArrow}>
                <Feather name="chevron-right" size={24} color="#0F172A" />
              </TouchableOpacity>
            </View>

            {/* Week Headers */}
            <View style={styles.weekRow}>
              {DAYS_OF_WEEK.map((day) => (
                <Text key={day} style={styles.dayLabel}>
                  {day}
                </Text>
              ))}
            </View>

            {/* Days Grid */}
            <View style={styles.daysGrid}>
              {calendarDays.map((day, idx) => {
                if (day === null) {
                  return <View key={`empty-${idx}`} style={styles.dayCell} />;
                }
                const isSelected = selectedDate === day;

                return (
                  <TouchableOpacity
                    key={`day-${day}`}
                    style={styles.dayCell}
                    onPress={() => setSelectedDate(day)}
                    activeOpacity={0.7}
                  >
                    <View
                      style={[
                        styles.dayCircle,
                        isSelected && styles.selectedDayCircle,
                      ]}
                    >
                      <Text
                        style={[
                          styles.dayNumberText,
                          isSelected && styles.selectedDayNumberText,
                        ]}
                      >
                        {day}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          {/* Select Time Slot Button matching Figma */}
          <TouchableOpacity
            style={styles.selectTimeSlotButton}
            onPress={handleSelectTimeSlot}
            activeOpacity={0.85}
          >
            <Text style={styles.selectTimeSlotButtonText}>
              Select Time Slot
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}
