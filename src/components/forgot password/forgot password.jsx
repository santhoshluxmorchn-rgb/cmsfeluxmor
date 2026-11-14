import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import {
  ImageBackground,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './forgot password.styles';

export default function ForgotPasswordScreen({ navigation }) {
  const [identifier, setIdentifier] = useState('');

  const handleSendOtp = () => {
    navigation.navigate('otp screen', {
      identifier: identifier.trim() || '+91 98765 43210',
    });
  };

  return (
    <ImageBackground
      source={require('../../assets/images/login-bg.jpg')}
      style={styles.container}
      resizeMode="cover"
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.content}>
          <View style={styles.shieldWrapper}>
            <MaterialCommunityIcons name="shield" size={110} color="#2F36C6" />
            <View style={styles.keyholeOverlay}>
              <View style={styles.keyholeHead} />
              <View style={styles.keyholeBody} />
            </View>
          </View>

          <Text style={styles.title}>Forgot Password?</Text>
          <Text style={styles.subtitle}>
            No worries! Enter your registered email address or mobile number and
            we'll send you a One-Time Password (OTP) to reset your password.
          </Text>

          <View style={styles.inputBox}>
            <View style={styles.iconGroup}>
              <MaterialCommunityIcons
                name="email-outline"
                size={18}
                color="#0F172A"
              />
              <Text style={styles.slash}>/</Text>
              <Feather name="phone-call" size={16} color="#0F172A" />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Email Address or Mobile Number"
              placeholderTextColor="#475569"
              value={identifier}
              onChangeText={setIdentifier}
              autoCapitalize="none"
            />
          </View>

          <TouchableOpacity
            style={styles.primaryButton}
            onPress={handleSendOtp}
            activeOpacity={0.8}
          >
            <Text style={styles.primaryButtonText}>Send OTP</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.outlineButton}
            onPress={() => navigation.goBack()}
            activeOpacity={0.7}
          >
            <Ionicons name="arrow-back" size={22} color="#2F36C6" />
            <Text style={styles.outlineButtonText}>Back to Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
