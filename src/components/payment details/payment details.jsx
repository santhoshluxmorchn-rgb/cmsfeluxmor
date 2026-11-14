import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import {
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { getBillingConfig, getPaymentMethods } from '../../db';
import styles from './payment details.styles';

export default function PaymentDetailsScreen({ navigation, route }) {
  const patientName = route?.params?.patientName || 'Daniel David';
  const patientId = route?.params?.patientId || 'LUXPP012365';
  const doctor = route?.params?.doctor || { name: 'Dr. Priya Menon' };
  const department = route?.params?.department || 'General Medicine';
  const appointmentDate = route?.params?.appointmentDate || '14 Nov 2026';
  const appointmentTime = route?.params?.appointmentTime || '10:00 AM';
  const healthIssue = route?.params?.healthIssue || '';

  const billingConfig = getBillingConfig();
  const paymentMethodsList = getPaymentMethods();

  const consultationFee = Number(
    route?.params?.consultationFee || doctor?.consultationFee || 600
  );
  const genericCharge = Number(billingConfig.genericCharge || 30.0);
  const taxUtility = Number(billingConfig.taxUtility || 13.0);
  const totalPayable = consultationFee + genericCharge + taxUtility;

  const [selectedMethod, setSelectedMethod] = useState(
    paymentMethodsList.find((m) => m.isDefault)?.id || 'upi'
  );

  const handlePayPress = () => {
    navigation.navigate('PaymentSuccess', {
      patientName,
      patientId,
      doctor,
      department,
      appointmentDate,
      appointmentTime,
      healthIssue,
      consultationFee,
      totalPaid: totalPayable.toFixed(2),
      paymentMethod: selectedMethod.toUpperCase(),
    });
  };

  return (
    <ImageBackground
      source={require('../../assets/images/health-issues-bg.jpg')}
      style={styles.container}
      resizeMode="stretch"
    >
      <View style={styles.content}>
        <View style={styles.topSection}>
          <View style={styles.topRow}>
            <TouchableOpacity
              style={styles.backBtn}
              onPress={() => navigation.goBack()}
              activeOpacity={0.7}
            >
              <Ionicons name="chevron-back" size={28} color="#2F36C6" />
            </TouchableOpacity>
            <View style={styles.titleWrapper}>
              <Text style={styles.headerTitle}>Make Payment</Text>
            </View>
            <View style={styles.placeholder} />
          </View>

          <View style={styles.billCard}>
            <View style={styles.billRow}>
              <Text style={styles.billLabel}>Consultation Free</Text>
              <Text style={styles.billValue}>₹{consultationFee.toFixed(2)}</Text>
            </View>
            <View style={styles.divider} />

            <View style={styles.billRow}>
              <Text style={styles.billLabel}>Generic Charge</Text>
              <Text style={styles.billValue}>₹{genericCharge.toFixed(2)}</Text>
            </View>
            <View style={styles.divider} />

            <View style={styles.billRow}>
              <Text style={styles.billLabel}>Tort Utilti(Txt)</Text>
              <Text style={styles.billValue}>₹{taxUtility.toFixed(2)}</Text>
            </View>

            <View style={styles.totalPayableBanner}>
              <Text style={styles.totalLabel}>Total Payable</Text>
              <Text style={styles.totalValue}>₹{totalPayable.toFixed(2)}</Text>
            </View>
          </View>

          <View style={styles.methodSection}>
            <Text style={styles.methodSectionTitle}>
              Special Payment Method
            </Text>

            {paymentMethodsList.map((method) => {
              const isSelected = selectedMethod === method.id;
              return (
                <TouchableOpacity
                  key={method.id}
                  style={styles.methodOption}
                  onPress={() => setSelectedMethod(method.id)}
                  activeOpacity={0.75}
                >
                  <View
                    style={[
                      styles.radioOuter,
                      isSelected && styles.radioOuterSelected,
                    ]}
                  >
                    {isSelected && <View style={styles.radioInner} />}
                  </View>
                  <Text style={styles.methodLabel}>{method.label}</Text>
                  {method.isNew && (
                    <View style={styles.razorpayBadge}>
                      <Text style={styles.razorpayBadgeText}>POPULAR</Text>
                    </View>
                  )}
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        <View style={styles.bottomSection}>
          <TouchableOpacity
            style={styles.payButton}
            onPress={handlePayPress}
            activeOpacity={0.8}
          >
            <Text style={styles.payButtonText}>
              Pay ₹{totalPayable.toFixed(2)}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

