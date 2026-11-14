import { Feather, Ionicons } from '@expo/vector-icons';
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { getHospitalInfo } from '../../db';
import styles from './book appointment - home.styles';

export default function BookAppointmentHomeScreen({ navigation, route }) {
  const userName = route?.params?.userName || 'Daniel';
  const hospital = getHospitalInfo() || {
    address: '23, Lake View Road, Chennai - 600041',
    phone: '+91 44 4321 9800',
    hours: 'Mon - Sun: 24 Hours',
    rating: 4.8,
    reviewsCount: 4,
  };

  const filledStarsCount = Math.floor(hospital.rating || 4);

  return (
    <ImageBackground
      source={require('../../assets/images/book-appointment-bg.jpg')}
      style={styles.container}
      imageStyle={styles.bgImage}
      resizeMode="cover"
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          <View style={styles.headerRow}>
            <TouchableOpacity
              style={styles.backBtn}
              onPress={() => navigation.goBack()}
              activeOpacity={0.7}
            >
              <Ionicons name="chevron-back" size={28} color="#2F36C6" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('profile', { userName })}
              activeOpacity={0.8}
            >
              <Image
                source={require('../../assets/images/avatar.jpg')}
                style={styles.avatar}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.detailsContainer}>
            <View style={styles.ratingRow}>
              <View style={styles.stars}>
                {[1, 2, 3, 4].map((i) => (
                  <Ionicons
                    key={i}
                    name={i <= filledStarsCount ? 'star' : 'star-outline'}
                    size={22}
                    color="#F59E0B"
                  />
                ))}
                <Ionicons name="star-outline" size={22} color="#F59E0B" />
              </View>
              <Text style={styles.reviewText}>
                {hospital.reviewsCount} (Reviews)
              </Text>
            </View>

            <View style={styles.infoList}>
              <View style={styles.infoRow}>
                <Ionicons name="location-sharp" size={24} color="#2F36C6" />
                <Text style={styles.infoText}>{hospital.address}</Text>
              </View>

              <View style={styles.infoRow}>
                <Feather name="phone-call" size={22} color="#2F36C6" />
                <Text style={styles.infoText}>{hospital.phone}</Text>
              </View>

              <View style={styles.infoRow}>
                <Feather name="clock" size={22} color="#2F36C6" />
                <Text style={styles.infoText}>{hospital.hours}</Text>
              </View>
            </View>

            <TouchableOpacity style={styles.mapButton} activeOpacity={0.8}>
              <Ionicons name="location-outline" size={22} color="#2F36C6" />
              <Text style={styles.mapButtonText}>View on Map</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.bookButton}
              onPress={() =>
                navigation.navigate('health issue selection', { userName })
              }
              activeOpacity={0.85}
            >
              <Text style={styles.bookButtonText}>Book Appointment</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
