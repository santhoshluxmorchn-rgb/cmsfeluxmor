import { Feather, Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import {
  Alert,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './appointment date.styles';

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

export default function AppointmentDateScreen({ navigation, route }) {
  const userName = route?.params?.userName || 'Daniel';
  const doctor = route?.params?.doctor || {
    name: 'Dr. Priya Menon',
    specialty: 'General Physician',
  };

  const [currentYear, setCurrentYear] = useState(2026);
  const [currentMonth, setCurrentMonth] = useState(10);
  const [selectedDate, setSelectedDate] = useState(14);

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
    if (currentYear === 2026 && currentMonth === 10) return 6;
    return new Date(currentYear, currentMonth, 1).getDay();
  };
  const firstDayIndex = getFirstDayIndex();

  const isSunday = (day) => {
    if (!day) return false;
    const cellIdx = day + firstDayIndex - 1;
    return cellIdx % 7 === 0;
  };

  const isAvailable = selectedDate !== null && !isSunday(selectedDate);

  const getDayName = (day) => {
    const cellIdx = day + firstDayIndex - 1;
    const dow = cellIdx % 7;
    return DAYS_OF_WEEK[dow];
  };

  const navigateToTimeSlot = (dayToUse) => {
    const day = dayToUse || selectedDate || 14;
    const dayName = getDayName(day);
    const fullDateStr = `${day} ${MONTH_NAMES[currentMonth].slice(0, 3)} ${currentYear}, ${dayName === 'Fri' ? 'Friday' : dayName}`;
    navigation.navigate('TimeSlot', {
      userName,
      doctor,
      department: route?.params?.department,
      healthIssue: route?.params?.healthIssue,
      date: `${day} ${MONTH_NAMES[currentMonth].slice(0, 3)} ${currentYear}`,
      fullDateStr,
    });
  };

  const handleDatePress = (day) => {
    setSelectedDate(day);
  };

  const handleSelectTimeSlotPress = () => {
    if (!selectedDate) {
      Alert.alert('Select Date', 'Please select a date from the calendar.');
      return;
    }
    if (isSunday(selectedDate)) {
      Alert.alert(
        'Date Unavailable',
        'Selected date is unavailable (Sunday). Please select another date.'
      );
      return;
    }
    navigateToTimeSlot(selectedDate);
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
      resizeMode="stretch"
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
            <Text style={styles.headerTitle}>Select Appointment Date</Text>
          </View>
          <View style={styles.placeholder} />
        </View>

        <View style={styles.calendarCard}>
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

          <View style={styles.weekRow}>
            {DAYS_OF_WEEK.map((day) => (
              <Text key={day} style={styles.dayLabel}>
                {day}
              </Text>
            ))}
          </View>

          <View style={styles.daysGrid}>
            {calendarDays.map((day, idx) => {
              if (day === null) {
                return <View key={`empty-${idx}`} style={styles.dayCell} />;
              }
              const isSelected = selectedDate === day;
              const isSun = isSunday(day);

              return (
                <TouchableOpacity
                  key={`day-${day}`}
                  style={styles.dayCell}
                  onPress={() => handleDatePress(day)}
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
                        isSun && styles.sundayDayNumber,
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

          <View style={styles.legendContainer}>
            <View style={styles.legendItem}>
              <View
                style={[
                  styles.dot,
                  { backgroundColor: isAvailable ? '#16A34A' : '#CBD5E1' },
                ]}
              />
              <Text style={styles.legendText}>Available</Text>
            </View>

            <View style={styles.legendItem}>
              <View
                style={[
                  styles.dot,
                  { backgroundColor: !isAvailable ? '#EF4444' : '#CBD5E1' },
                ]}
              />
              <Text style={styles.legendText}>Unavailable</Text>
            </View>
          </View>

          <TouchableOpacity
            style={[
              styles.selectTimeSlotButton,
              !isAvailable && styles.selectTimeSlotButtonDisabled,
            ]}
            onPress={handleSelectTimeSlotPress}
            activeOpacity={0.85}
          >
            <Text style={styles.selectTimeSlotButtonText}>
              Select Time Slot
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

