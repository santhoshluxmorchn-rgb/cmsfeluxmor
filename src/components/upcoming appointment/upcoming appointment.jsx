import { Feather, Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { getAppointments } from '../../db';
import styles from './upcoming appointment.styles';

export default function UpcomingAppointmentScreen({ navigation, route }) {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [appointments, setAppointments] = useState(getAppointments());

  useFocusEffect(
    useCallback(() => {
      setAppointments(getAppointments());
      if (route?.params?.defaultTab) {
        setActiveTab(route.params.defaultTab);
      }
    }, [route?.params?.defaultTab])
  );

  const displayedAppointments = appointments.filter((item) => {
    if (activeTab === 'upcoming') return item.status === 'Upcoming';
    if (activeTab === 'completed')
      return item.status === 'Completed' || item.status === 'Compliable';
    if (activeTab === 'canceled') return item.status === 'Canceled';
    return true;
  });

  const handleCancelAppointment = (item) => {
    navigation.navigate('cancel appointment', {
      appointmentId: item.id,
      bookingId: item.bookingId || 'LUXAP125687',
      doctorName: item.doctorName,
      date: item.date,
    });
  };

  const handleReschedule = (item) => {
    navigation.navigate('reschedule appointment', {
      rescheduleAptId: item.id,
      doctor: {
        name: item.doctorName,
        specialty: item.specialty,
      },
      appointment: item,
    });
  };

  const handleViewDetails = (item) => {
    navigation.navigate('AppointmentDetailsAfterConfirmation', {
      appointment: item,
    });
  };

  const renderAppointmentItem = ({ item }) => {
    const isUpcoming = item.status === 'Upcoming';
    const isCompleted =
      item.status === 'Completed' || item.status === 'Compliable';
    const isCanceled = item.status === 'Canceled';

    return (
      <View style={styles.appointmentCard}>
        <View style={styles.doctorHeader}>
          <Image
            source={item.doctorImage}
            style={styles.doctorAvatar}
            resizeMode="cover"
          />
          <View style={styles.doctorInfo}>
            <Text style={styles.doctorName}>{item.doctorName}</Text>
            <Text style={styles.doctorSpecialty}>{item.specialty}</Text>
          </View>
        </View>

        <View style={styles.scheduleInfo}>
          <View style={styles.scheduleRow}>
            <Feather name="calendar" size={20} color="#0F172A" />
            <Text style={styles.scheduleText}>{item.date}</Text>
          </View>

          <View style={styles.scheduleRow}>
            <Ionicons name="location-outline" size={22} color="#0F172A" />
            <Text style={styles.scheduleText}>{item.hospital}</Text>
          </View>
        </View>

        <View style={styles.statusBadgeWrapper}>
          <View
            style={[
              styles.statusBadge,
              (isUpcoming || isCompleted) && styles.statusBadgeCompliable,
              isCanceled && styles.statusBadgeCanceled,
            ]}
          >
            <Text style={styles.statusBadgeText}>
              {isUpcoming ? 'Upcoming' : isCompleted ? 'Completed' : 'Canceled'}
            </Text>
          </View>
        </View>

        {isUpcoming && (
          <View style={styles.actionButtonsRow}>
            <TouchableOpacity
              style={styles.rescheduleButton}
              onPress={() => handleReschedule(item)}
              activeOpacity={0.8}
            >
              <Text style={styles.rescheduleButtonText}>Reschedule</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => handleCancelAppointment(item)}
              activeOpacity={0.8}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        )}

        {!isUpcoming && (
          <TouchableOpacity
            style={styles.viewDetailsButton}
            onPress={() => handleViewDetails(item)}
            activeOpacity={0.8}
          >
            <Text style={styles.viewDetailsButtonText}>View details</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };

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
            onPress={() => navigation.navigate('Dashboard')}
            activeOpacity={0.7}
          >
            <Ionicons name="chevron-back" size={28} color="#2F36C6" />
          </TouchableOpacity>
          <View style={styles.titleWrapper}>
            <Text style={styles.headerTitle}>My Appointment</Text>
          </View>
          <View style={styles.placeholder} />
        </View>

        <View style={styles.tabsContainer}>
          <TouchableOpacity
            style={styles.tab}
            onPress={() => setActiveTab('upcoming')}
            activeOpacity={0.8}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === 'upcoming' && styles.activeTabText,
              ]}
            >
              Upcoming
            </Text>
            {activeTab === 'upcoming' && (
              <View style={styles.activeIndicator} />
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.tab}
            onPress={() => setActiveTab('completed')}
            activeOpacity={0.8}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === 'completed' && styles.activeTabText,
              ]}
            >
              Compliable
            </Text>
            {activeTab === 'completed' && (
              <View style={styles.activeIndicator} />
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.tab}
            onPress={() => setActiveTab('canceled')}
            activeOpacity={0.8}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === 'canceled' && styles.activeTabText,
              ]}
            >
              Canceled
            </Text>
            {activeTab === 'canceled' && (
              <View style={styles.activeIndicator} />
            )}
          </TouchableOpacity>
        </View>

        <FlatList
          data={displayedAppointments}
          renderItem={renderAppointmentItem}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </ImageBackground>
  );
}

