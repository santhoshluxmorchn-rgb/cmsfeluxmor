import {
  Feather,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { useState } from 'react';
import {
  Alert,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { updateUserPassword } from '../../db';
import styles from './new password.styles';

export default function NewPasswordScreen({ navigation, route }) {
  const targetIdentifier = route?.params?.identifier || 'daniel.david@email.com';
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const hasLength = newPassword.length >= 8;
  const hasUpper = /[A-Z]/.test(newPassword);
  const hasNumber = /[0-9]/.test(newPassword);
  const hasSpecial = /[^A-Za-z0-9]/.test(newPassword);

  const passedCount =
    (hasLength ? 1 : 0) +
    (hasUpper ? 1 : 0) +
    (hasNumber ? 1 : 0) +
    (hasSpecial ? 1 : 0);

  let strengthLabel = 'None';
  let strengthColor = '#64748B';
  let activeBars = 0;

  if (newPassword) {
    if (passedCount <= 1) {
      strengthLabel = 'Weak';
      strengthColor = '#DC2626';
      activeBars = 1;
    } else if (passedCount === 2) {
      strengthLabel = 'Fair';
      strengthColor = '#D97706';
      activeBars = 2;
    } else if (passedCount === 3) {
      strengthLabel = 'Good';
      strengthColor = '#16A34A';
      activeBars = 3;
    } else {
      strengthLabel = 'Strong';
      strengthColor = '#2E7D32';
      activeBars = 4;
    }
  }

  const handleReset = () => {
    if (!newPassword) {
      Alert.alert('Required', 'Please enter a new password.');
      return;
    }
    if (newPassword.length < 6) {
      Alert.alert('Weak Password', 'Password must be at least 6 characters.');
      return;
    }
    if (newPassword !== confirmPassword) {
      Alert.alert('Mismatch', 'New password and confirm password do not match.');
      return;
    }

    const res = updateUserPassword(targetIdentifier, newPassword);
    if (res.success) {
      Alert.alert(
        'Success',
        'Your password has been successfully reset! Please log in with your new password.',
        [{ text: 'Login Now', onPress: () => navigation.navigate('Login') }]
      );
    } else {
      Alert.alert('Error', res.error || 'Failed to update password.');
    }
  };

  return (
    <ImageBackground
      source={require('../../assets/images/login-bg.jpg')}
      style={styles.container}
      resizeMode="stretch"
    >
      <View style={styles.content}>
        <View style={styles.iconWrapper}>
          <MaterialCommunityIcons
            name="account-lock"
            size={58}
            color="#2F36C6"
          />
        </View>

        <Text style={styles.title}>Create New Password</Text>
        <Text style={styles.subtitle}>Set a new password for your account</Text>

        <View style={styles.inputBox}>
          <FontAwesome5 name="lock" size={16} color="#0F172A" />
          <TextInput
            style={styles.input}
            placeholder="New Password"
            placeholderTextColor="#1F2937"
            value={newPassword}
            onChangeText={setNewPassword}
            secureTextEntry={!showPassword}
            autoCapitalize="none"
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? 'eye-outline' : 'eye-off'}
              size={20}
              color="#0F172A"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.inputBox}>
          <FontAwesome5 name="lock" size={16} color="#0F172A" />
          <TextInput
            style={styles.input}
            placeholder="Confirm New Password"
            placeholderTextColor="#1F2937"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={!showPassword}
            autoCapitalize="none"
          />
        </View>

        <View style={styles.strengthRow}>
          <Text style={styles.strengthLabel}>Password Strength: </Text>
          <Text style={[styles.strengthValue, { color: strengthColor }]}>
            {strengthLabel}
          </Text>
        </View>

        <View style={styles.barsRow}>
          {[0, 1, 2, 3, 4].map((i) => (
            <View
              key={i}
              style={[
                styles.bar,
                i < activeBars && { backgroundColor: strengthColor },
              ]}
            />
          ))}
        </View>

        <View style={styles.rulesCard}>
          <View style={styles.ruleRow}>
            <Feather
              name="check"
              size={15}
              color={hasLength ? '#2E7D32' : '#4B5563'}
            />
            <Text style={styles.ruleText}>At least 8 characters</Text>
          </View>
          <View style={styles.ruleRow}>
            <Feather
              name="check"
              size={15}
              color={hasUpper ? '#2E7D32' : '#4B5563'}
            />
            <Text style={styles.ruleText}>One uppercase letter (A-Z)</Text>
          </View>
          <View style={styles.ruleRow}>
            <Feather
              name="check"
              size={15}
              color={hasNumber ? '#2E7D32' : '#4B5563'}
            />
            <Text style={styles.ruleText}>One number (0-9)</Text>
          </View>
          <View style={styles.ruleRow}>
            <Feather
              name="check"
              size={15}
              color={hasSpecial ? '#2E7D32' : '#4B5563'}
            />
            <Text style={styles.ruleText}>One special character (e.g., @, #, $, &)</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={handleReset}
          activeOpacity={0.8}
        >
          <Text style={styles.primaryButtonText}>Reset Password</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.outlineButton}
          onPress={() => navigation.navigate('Login')}
          activeOpacity={0.7}
        >
          <Ionicons name="arrow-back" size={20} color="#2F36C6" />
          <Text style={styles.outlineButtonText}>Back to Login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

