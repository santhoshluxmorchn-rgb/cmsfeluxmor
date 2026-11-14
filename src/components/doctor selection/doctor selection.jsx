import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { getDoctors } from '../../db';
import styles from './doctor selection.styles';

const DOCTORS = getDoctors();

export default function DoctorSelectionScreen({ navigation, route }) {
  const [activeTab, setActiveTab] = useState('available');
  const [selectedDoctorId, setSelectedDoctorId] = useState(null);

  const displayedDoctors =
    activeTab === 'available'
      ? DOCTORS.filter((d) => d.availableToday)
      : DOCTORS;

  const renderDoctorItem = ({ item }) => {
    const isSelected = selectedDoctorId === item.id;
    return (
      <TouchableOpacity
        style={[styles.doctorCard, isSelected && styles.selectedDoctorCard]}
        onPress={() => {
          setSelectedDoctorId(item.id);
          navigation.navigate('AppointmentDate', {
            userName: route?.params?.userName,
            doctor: item,
            department: route?.params?.department,
            healthIssue: route?.params?.healthIssue,
          });
        }}
        activeOpacity={0.75}
      >
        <Image source={item.image} style={styles.avatar} resizeMode="cover" />
        <View style={styles.infoWrapper}>
          <Text style={styles.doctorName}>{item.name}</Text>
          <Text style={styles.specialtyText}>{item.specialty}</Text>
          <View style={styles.ratingRow}>
            <Ionicons name="star" size={14} color="#F59E0B" />
            <Text style={styles.ratingScore}>{item.rating}</Text>
            <Text style={styles.reviewsText}>({item.reviews})</Text>
          </View>
          <Text style={styles.qualificationText}>{item.qualification}</Text>
        </View>
      </TouchableOpacity>
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
            onPress={() => navigation.goBack()}
            activeOpacity={0.7}
          >
            <Ionicons name="chevron-back" size={26} color="#2F36C6" />
          </TouchableOpacity>
          <View style={styles.titleWrapper}>
            <Text style={styles.headerTitle}>Select Doctor</Text>
          </View>
          <View style={styles.placeholder} />
        </View>

        <View style={styles.tabsContainer}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'available' && styles.activeTab]}
            onPress={() => setActiveTab('available')}
            activeOpacity={0.8}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === 'available' && styles.activeTabText,
              ]}
            >
              Available Today
            </Text>
            {activeTab === 'available' && <View style={styles.activeIndicator} />}
          </TouchableOpacity>

          <View style={styles.tabDivider} />

          <TouchableOpacity
            style={[styles.tab, activeTab === 'all' && styles.activeTab]}
            onPress={() => setActiveTab('all')}
            activeOpacity={0.8}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === 'all' && styles.activeTabText,
              ]}
            >
              All Doctors
            </Text>
            {activeTab === 'all' && <View style={styles.activeIndicator} />}
          </TouchableOpacity>
        </View>

        <FlatList
          data={displayedDoctors}
          renderItem={renderDoctorItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </View>
    </ImageBackground>
  );
}

