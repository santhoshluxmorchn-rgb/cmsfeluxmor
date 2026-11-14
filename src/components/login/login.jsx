import {
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { useState } from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { authenticateUser, useUser } from '../../db';
import styles from './login.styles';

export default function LoginScreen({ navigation }) {
  const { updateUserData } = useUser();
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  const handleLogin = () => {
    const trimmedId = identifier.trim();
    const trimmedPass = password.trim();

    if (!trimmedId || !trimmedPass) {
      Alert.alert(
        'Required Fields',
        'Please enter both your registered Email Address / Mobile Number and Password.'
      );
      return;
    }

    const authResult = authenticateUser(trimmedId, trimmedPass);

    if (!authResult.success) {
      Alert.alert('Login Failed', authResult.error);
      return;
    }

    updateUserData(authResult.user);
    navigation.navigate('dashboard');
  };

  const handleGoogleLogin = () => {
    const defaultAuth = authenticateUser('daniel.david@email.com', 'password123');
    if (defaultAuth.success) {
      updateUserData(defaultAuth.user);
      navigation.navigate('dashboard');
    }
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
          <Text style={styles.title}>Patient Login</Text>
          <Text style={styles.subtitle}>
            Access your appointments, prescriptions{'\n'}and health records
          </Text>

          {/* Email / Mobile input */}
          <View style={styles.inputBox}>
            <MaterialCommunityIcons
              name="email-outline"
              size={22}
              color="#0F172A"
            />
            <TextInput
              style={styles.input}
              placeholder="Email Address or Mobile Number"
              placeholderTextColor="#475569"
              value={identifier}
              onChangeText={setIdentifier}
              autoCapitalize="none"
            />
          </View>

          {/* Password input */}
          <View style={styles.inputBox}>
            <FontAwesome5 name="lock" size={18} color="#0F172A" />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#475569"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              autoCapitalize="none"
            />
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <Ionicons
                name={showPassword ? 'eye-outline' : 'eye-off'}
                size={22}
                color="#0F172A"
              />
            </TouchableOpacity>
          </View>

          {/* Remember me & Forgot Password row */}
          <View style={styles.rowBetween}>
            <TouchableOpacity
              style={styles.rememberTouch}
              onPress={() => setRememberMe(!rememberMe)}
              activeOpacity={0.7}
            >
              <View style={[styles.checkbox, rememberMe && styles.checkboxChecked]}>
                {rememberMe && <Ionicons name="checkmark" size={15} color="#FFF" />}
              </View>
              <Text style={styles.rememberText}>Remember me</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('forgot password')}
              activeOpacity={0.7}
            >
              <Text style={styles.forgotText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>

          {/* Login button */}
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={handleLogin}
            activeOpacity={0.8}
          >
            <Text style={styles.primaryButtonText}>Login</Text>
          </TouchableOpacity>

          {/* Divider */}
          <View style={styles.dividerRow}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>or</Text>
            <View style={styles.dividerLine} />
          </View>

          {/* Continue with Google */}
          <TouchableOpacity
            style={styles.googleButton}
            onPress={handleGoogleLogin}
            activeOpacity={0.8}
          >
            <Image
              source={require('../../assets/icons/google-icon.png')}
              style={styles.googleIcon}
              resizeMode="contain"
            />
            <Text style={styles.googleButtonText}>Continue with Google</Text>
          </TouchableOpacity>

          {/* Register section matching Figma */}
          <View style={styles.registerSection}>
            <View style={styles.registerPromptRow}>
              <FontAwesome5 name="user-alt" size={14} color="#0F172A" />
              <Text style={styles.registerPromptText}>
                New to LUX Healthcare Hospital?
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('registration')}
              activeOpacity={0.7}
            >
              <Text style={styles.registerLink}>Register as a Patient</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
