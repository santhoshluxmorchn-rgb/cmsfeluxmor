import {
  Feather,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons';
import { useState } from 'react';
import {
  Alert,
  ImageBackground,
  Modal,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useUser } from '../../db';
import { registerUser } from '../../db';
import styles from './registration.styles';

const GENDER_OPTIONS = ['Male', 'Female', 'Other'];
const BLOOD_GROUPS = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

export default function RegistrationScreen({ navigation }) {
  const { updateUserData } = useUser();

  const [form, setForm] = useState({
    fullName: '',
    dob: '',
    gender: '',
    mobile: '',
    email: '',
    bloodGroup: '',
    aadhar: '',
    address: '',
    emergencyContact: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [picker, setPicker] = useState({
    visible: false,
    title: '',
    options: [],
    onSelect: null,
  });

  const updateField = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const openPicker = (title, options, onSelect) => {
    setPicker({
      visible: true,
      title,
      options,
      onSelect,
    });
  };

  const handleCreateAccount = () => {
    const {
      fullName,
      dob,
      gender,
      mobile,
      email,
      bloodGroup,
      aadhar,
      address,
      emergencyContact,
      password,
      confirmPassword,
    } = form;

    if (!fullName.trim() || (!mobile.trim() && !email.trim()) || !password) {
      Alert.alert(
        'Required Fields',
        'Please fill in Full Name, Mobile Number or Email, and Password.'
      );
      return;
    }

    if (password.length < 6) {
      Alert.alert('Weak Password', 'Password must be at least 6 characters.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert(
        'Password Mismatch',
        'Password and Confirm Password do not match.'
      );
      return;
    }

    const regResult = registerUser({
      fullName: fullName.trim(),
      dob: dob.trim() || '12 Feb 1995',
      gender: gender || 'Male',
      bloodGroup: bloodGroup || 'O+',
      mobile: mobile.trim() || '+91 98765 43210',
      email: email.trim().toLowerCase() || 'daniel.david@email.com',
      aadhar: aadhar.trim(),
      address:
        address.trim() ||
        '23, Lake View road,\nChennai - 600041,\nTamil Nadu.',
      emergencyContact: emergencyContact.trim(),
      password,
    });

    if (!regResult.success) {
      Alert.alert('Registration Failed', regResult.error);
      return;
    }

    updateUserData(regResult.user);
    Alert.alert(
      'Registration Successful',
      `Welcome to LUX Healthcare Hospital, ${regResult.user.fullName}!\nYour Patient ID is: ${regResult.user.patientId}\n\nYou can now log in using your registered credentials.`,
      [
        {
          text: 'Continue',
          onPress: () => navigation.navigate('Dashboard'),
        },
      ]
    );
  };

  return (
    <ImageBackground
      source={require('../../assets/images/ra.png')}
      style={styles.container}
      resizeMode="stretch"
    >
      <View style={styles.content}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back" size={26} color="#2F36C6" />
        </TouchableOpacity>

        <View style={styles.headerRow}>
          <MaterialCommunityIcons
            name="text-box-plus-outline"
            size={52}
            color="#2F36C6"
          />
          <View>
            <Text style={styles.title}>Patient Registration</Text>
            <Text style={styles.subtitle}>
              Create your Healthcare Hospital{'\n'}Patient account
            </Text>
          </View>
        </View>

        <View style={styles.inputCard}>
          <Ionicons name="person-circle-outline" size={22} color="#0F172A" />
          <View style={styles.inputBody}>
            <Text style={styles.label}>
              Full Name <Text style={styles.required}>*</Text>
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your full name"
              placeholderTextColor="#334155"
              value={form.fullName}
              onChangeText={(val) => updateField('fullName', val)}
            />
          </View>
        </View>

        <View style={styles.row}>
          <View style={[styles.inputCard, styles.halfCard]}>
            <MaterialCommunityIcons
              name="calendar-blank-outline"
              size={20}
              color="#0F172A"
            />
            <View style={styles.inputBody}>
              <Text style={styles.label}>
                Date of Birth <Text style={styles.required}>*</Text>
              </Text>
              <TextInput
                style={styles.input}
                placeholder="DD / MM / YYYY"
                placeholderTextColor="#334155"
                value={form.dob}
                onChangeText={(val) => updateField('dob', val)}
              />
            </View>
          </View>

          <TouchableOpacity
            style={[styles.inputCard, styles.halfCard]}
            onPress={() =>
              openPicker('Select Gender', GENDER_OPTIONS, (val) =>
                updateField('gender', val)
              )
            }
          >
            <MaterialCommunityIcons
              name="gender-male-female"
              size={20}
              color="#0F172A"
            />
            <View style={styles.inputBody}>
              <View style={styles.selectHeader}>
                <Text style={styles.label}>
                  Gender <Text style={styles.required}>*</Text>
                </Text>
                <Ionicons name="chevron-down" size={14} color="#0F172A" />
              </View>
              <Text
                style={[
                  styles.valueText,
                  !form.gender && styles.placeholderText,
                ]}
              >
                {form.gender || 'Select Gender'}
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <View style={[styles.inputCard, styles.halfCard]}>
            <Feather name="phone-call" size={18} color="#0F172A" />
            <View style={styles.inputBody}>
              <Text style={styles.label}>
                Mobile Number <Text style={styles.required}>*</Text>
              </Text>
              <TextInput
                style={styles.input}
                placeholder="+91 98765 43210"
                placeholderTextColor="#334155"
                value={form.mobile}
                onChangeText={(val) => updateField('mobile', val)}
                keyboardType="phone-pad"
              />
            </View>
          </View>

          <View style={[styles.inputCard, styles.halfCard]}>
            <MaterialCommunityIcons
              name="email-outline"
              size={20}
              color="#0F172A"
            />
            <View style={styles.inputBody}>
              <Text style={styles.label}>
                Email Address <Text style={styles.required}>*</Text>
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Enter email address"
                placeholderTextColor="#334155"
                value={form.email}
                onChangeText={(val) => updateField('email', val)}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
          </View>
        </View>

        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.inputCard, styles.halfCard]}
            onPress={() =>
              openPicker('Select Blood Group', BLOOD_GROUPS, (val) =>
                updateField('bloodGroup', val)
              )
            }
          >
            <Ionicons name="water-outline" size={20} color="#0F172A" />
            <View style={styles.inputBody}>
              <View style={styles.selectHeader}>
                <Text style={styles.label}>Blood Group</Text>
                <Ionicons name="chevron-down" size={14} color="#0F172A" />
              </View>
              <Text
                style={[
                  styles.valueText,
                  !form.bloodGroup && styles.placeholderText,
                ]}
              >
                {form.bloodGroup || 'Select Blood Group'}
              </Text>
            </View>
          </TouchableOpacity>

          <View style={[styles.inputCard, styles.halfCard]}>
            <MaterialCommunityIcons
              name="card-account-details-outline"
              size={20}
              color="#0F172A"
            />
            <View style={styles.inputBody}>
              <Text style={styles.label}>
                Aadhar Number <Text style={styles.required}>*</Text>
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your Aadhar no"
                placeholderTextColor="#334155"
                value={form.aadhar}
                onChangeText={(val) => updateField('aadhar', val)}
                keyboardType="number-pad"
                maxLength={12}
              />
            </View>
          </View>
        </View>

        <View style={styles.inputCard}>
          <Ionicons name="location-sharp" size={20} color="#0F172A" />
          <View style={styles.inputBody}>
            <Text style={styles.label}>
              Address <Text style={styles.required}>*</Text>
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Enter you full Address"
              placeholderTextColor="#334155"
              value={form.address}
              onChangeText={(val) => updateField('address', val)}
            />
          </View>
        </View>

        <View style={styles.inputCard}>
          <MaterialIcons name="people" size={20} color="#0F172A" />
          <View style={styles.inputBody}>
            <Text style={styles.label}>
              Emergency Contact Number <Text style={styles.required}>*</Text>
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Enter emergency contact number"
              placeholderTextColor="#334155"
              value={form.emergencyContact}
              onChangeText={(val) => updateField('emergencyContact', val)}
              keyboardType="phone-pad"
            />
          </View>
        </View>

        <View style={styles.inputCard}>
          <FontAwesome5 name="lock" size={16} color="#0F172A" />
          <View style={styles.inputBody}>
            <Text style={styles.label}>
              Password <Text style={styles.required}>*</Text>
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Create a Password"
              placeholderTextColor="#334155"
              value={form.password}
              onChangeText={(val) => updateField('password', val)}
              secureTextEntry={!showPassword}
              autoCapitalize="none"
            />
          </View>
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? 'eye-outline' : 'eye-off'}
              size={20}
              color="#0F172A"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.inputCard}>
          <FontAwesome5 name="lock" size={16} color="#0F172A" />
          <View style={styles.inputBody}>
            <Text style={styles.label}>
              Confirm Password <Text style={styles.required}>*</Text>
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Re - enter your password"
              placeholderTextColor="#334155"
              value={form.confirmPassword}
              onChangeText={(val) => updateField('confirmPassword', val)}
              secureTextEntry={!showConfirm}
              autoCapitalize="none"
            />
          </View>
          <TouchableOpacity onPress={() => setShowConfirm(!showConfirm)}>
            <Ionicons
              name={showConfirm ? 'eye-outline' : 'eye-off'}
              size={20}
              color="#0F172A"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.createButton}
          onPress={handleCreateAccount}
          activeOpacity={0.8}
        >
          <FontAwesome5 name="user-plus" size={18} color="#FFFFFF" />
          <Text style={styles.createButtonText}>Create Account</Text>
        </TouchableOpacity>

        <View style={styles.footerRow}>
          <Text style={styles.footerText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginLink}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        visible={picker.visible}
        transparent
        animationType="fade"
        onRequestClose={() => setPicker((prev) => ({ ...prev, visible: false }))}
      >
        <Pressable
          style={styles.modalOverlay}
          onPress={() => setPicker((prev) => ({ ...prev, visible: false }))}
        >
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{picker.title}</Text>
            {picker.options.map((item) => (
              <TouchableOpacity
                key={item}
                style={styles.modalItem}
                onPress={() => {
                  picker.onSelect && picker.onSelect(item);
                  setPicker((prev) => ({ ...prev, visible: false }));
                }}
              >
                <Text style={styles.modalItemText}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </Pressable>
      </Modal>
    </ImageBackground>
  );
}

