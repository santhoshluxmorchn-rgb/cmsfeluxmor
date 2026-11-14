import { FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import {
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { getHospitalFeatures } from '../../db';
import styles from './home screen.styles';

function FeatureIcon({ iconSet, iconName, iconSize }) {
  if (iconSet === 'fa5') {
    return <FontAwesome5 name={iconName} size={iconSize} color="#0F172A" />;
  }
  return <MaterialCommunityIcons name={iconName} size={iconSize} color="#0F172A" />;
}

export default function HomeScreen({ navigation }) {
  const featuresList = getHospitalFeatures();

  return (
    <ImageBackground
      source={require('../../assets/images/home-bg.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.cardContainer}>
        <ImageBackground
          source={require('../../assets/images/feature-rectangle.png')}
          style={styles.featureCard}
          imageStyle={styles.featureCardImage}
          resizeMode="stretch"
        >
          {featuresList.map((item, index) => (
            <View key={item.key} style={styles.featureItemWrapper}>
              {index > 0 && <View style={styles.featureDivider} />}
              <View style={styles.featureItem}>
                <FeatureIcon
                  iconSet={item.iconSet}
                  iconName={item.iconName}
                  iconSize={item.iconSize}
                />
                <Text style={styles.featureLabel}>{item.label}</Text>
              </View>
            </View>
          ))}
        </ImageBackground>

        <Text style={styles.subtitle}>
          Book appointments, consult top doctors, access your medical records,
          prescriptions and more - all in one place
        </Text>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.85}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
          <Ionicons name="arrow-forward" size={22} color="#FFFFFF" />
        </TouchableOpacity>
        <View style={styles.dotsContainer}>
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
        <View style={styles.accountRow}>
          <FontAwesome5 name="user-plus" size={18} color="#0F172A" />
          <Text style={styles.accountText}>Already have an account?</Text>
        </View>
        <TouchableOpacity
          style={styles.loginButton}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
