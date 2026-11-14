import {
  Feather,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { useEffect, useRef, useState } from 'react';
import {
  ImageBackground,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './otp screen.styles';

export default function OtpScreen({ navigation, route }) {
  const targetContact = route?.params?.identifier || '+91 98785 43210';
  const [otp, setOtp] = useState(['5', '3', '8', '2', '9', '1']);
  const [seconds, setSeconds] = useState(28);
  const inputs = useRef([]);

  useEffect(() => {
    if (seconds <= 0) return;
    const interval = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleBackspace = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handleVerify = () => {
    navigation.navigate('new password', {
      identifier: targetContact,
    });
  };

  const timerText = `00:${seconds < 10 ? '0' : ''}${seconds}`;

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
          <View style={styles.iconWrapper}>
            <Feather name="user" size={64} color="#2F36C6" />
            <View style={styles.badgeCircle}>
              <MaterialCommunityIcons
                name="check-circle"
                size={28}
                color="#2F36C6"
              />
            </View>
          </View>

          <Text style={styles.title}>OTP Verification</Text>
          <Text style={styles.subtitle}>
            We have sent a 6 - digit One Time Password(OTP){'\n'}to your registered mobile number
          </Text>

          <View style={styles.contactRow}>
            <Text style={styles.contactText}>{targetContact}</Text>
            <TouchableOpacity
              style={styles.editRow}
              onPress={() => navigation.goBack()}
              activeOpacity={0.7}
            >
              <Text style={styles.editText}>Edit</Text>
              <MaterialCommunityIcons
                name="pencil"
                size={16}
                color="#2F36C6"
              />
            </TouchableOpacity>
          </View>

          <View style={styles.otpRow}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={(ref) => (inputs.current[index] = ref)}
                style={styles.otpBox}
                value={digit}
                onChangeText={(text) => handleChange(text, index)}
                onKeyPress={(e) => handleBackspace(e, index)}
                keyboardType="number-pad"
                maxLength={1}
                selectTextOnFocus
              />
            ))}
          </View>

          <View style={styles.resendRow}>
            <Text style={styles.resendLabel}>Resend OTP in </Text>
            <TouchableOpacity
              disabled={seconds > 0}
              onPress={() => setSeconds(30)}
            >
              <Text style={styles.resendTimer}>
                {seconds > 0 ? timerText : 'Resend'}
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.primaryButton}
            onPress={handleVerify}
            activeOpacity={0.8}
          >
            <Text style={styles.primaryButtonText}>Verify OTP</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.outlineButton}
            onPress={() => navigation.navigate('login')}
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
