import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../components/Home screen/home screen';
import LoginScreen from '../components/login/login';
import ForgotPasswordScreen from '../components/forgot password/forgot password';
import OtpScreen from '../components/otp screen/otp screen';
import NewPasswordScreen from '../components/new password/new password';
import RegistrationScreen from '../components/registration/registration';
import ProfileScreen from '../components/profile/profile';
import DashboardScreen from '../components/dashboard/dashboard';
import BookAppointmentHomeScreen from '../components/book appointment - home/book appointment - home';
import HealthIssueSelectionScreen from '../components/health issue selection/health issue selection';
import DepartmentSelectionScreen from '../components/department selection/department selection';
import DoctorSelectionScreen from '../components/doctor selection/doctor selection';
import AppointmentDateScreen from '../components/appointment date/appointment date';
import TimeSlotScreen from '../components/time slot/time slot';
import AppointmentDetailsBeforeConfirmationScreen from '../components/appointment details - before confirmation/appointment details - before confirmation';
import ReviewAppointmentScreen from '../components/review appointment/review appointment';
import PaymentDetailsScreen from '../components/payment details/payment details';
import PaymentSuccessScreen from '../components/payment success/payment success';
import PaymentConfirmScreen from '../components/payment confirm/payment confirm';
import UpcomingAppointmentScreen from '../components/upcoming appointment/upcoming appointment';
import AppointmentDetailsAfterConfirmationScreen from '../components/appointment details - after confirmation/appointment details - after confirmation';
import RescheduleAppointmentScreen from '../components/reschedule appointment/reschedule appointment';
import CancelAppointmentScreen from '../components/cancel appointment/cancel appointment';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home screen"
        screenOptions={{
          animation: 'fade',
          contentStyle: { backgroundColor: '#EAF3FE' },
          headerShown: false,
        }}
      >
        {/* 1. home screen */}
        <Stack.Screen name="home screen" component={HomeScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />

        {/* 2. login */}
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />

        {/* 3. forgot password */}
        <Stack.Screen name="forgot password" component={ForgotPasswordScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />

        {/* 4. otp screen */}
        <Stack.Screen name="otp screen" component={OtpScreen} />
        <Stack.Screen name="Otp" component={OtpScreen} />
        <Stack.Screen name="OtpScreen" component={OtpScreen} />
        <Stack.Screen name="OtpVerification" component={OtpScreen} />

        {/* 5. new password */}
        <Stack.Screen name="new password" component={NewPasswordScreen} />
        <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
        <Stack.Screen name="NewPasswordScreen" component={NewPasswordScreen} />
        <Stack.Screen name="CreateNewPassword" component={NewPasswordScreen} />

        {/* 6. registration */}
        <Stack.Screen name="registration" component={RegistrationScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
        <Stack.Screen name="PatientRegistration" component={RegistrationScreen} />

        {/* 7. profile */}
        <Stack.Screen name="profile" component={ProfileScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="PatientProfile" component={ProfileScreen} />

        {/* 8. dashboard */}
        <Stack.Screen name="dashboard" component={DashboardScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
        <Stack.Screen name="PatientHome" component={DashboardScreen} />

        {/* 9. book appointment - home */}
        <Stack.Screen name="book appointment - home" component={BookAppointmentHomeScreen} />
        <Stack.Screen name="BookAppointmentHome" component={BookAppointmentHomeScreen} />
        <Stack.Screen name="BookAppointmentHomeScreen" component={BookAppointmentHomeScreen} />
        <Stack.Screen name="HospitalDetail" component={BookAppointmentHomeScreen} />

        {/* 10. health issue selection */}
        <Stack.Screen name="health issue selection" component={HealthIssueSelectionScreen} />
        <Stack.Screen name="HealthIssueSelection" component={HealthIssueSelectionScreen} />
        <Stack.Screen name="HealthIssueSelectionScreen" component={HealthIssueSelectionScreen} />
        <Stack.Screen name="SelectHealthIssue" component={HealthIssueSelectionScreen} />

        {/* 11. department selection */}
        <Stack.Screen name="department selection" component={DepartmentSelectionScreen} />
        <Stack.Screen name="DepartmentSelection" component={DepartmentSelectionScreen} />
        <Stack.Screen name="DepartmentSelectionScreen" component={DepartmentSelectionScreen} />
        <Stack.Screen name="SelectDepartment" component={DepartmentSelectionScreen} />

        {/* 12. doctor selection */}
        <Stack.Screen name="doctor selection" component={DoctorSelectionScreen} />
        <Stack.Screen name="DoctorSelection" component={DoctorSelectionScreen} />
        <Stack.Screen name="DoctorSelectionScreen" component={DoctorSelectionScreen} />
        <Stack.Screen name="SelectDoctor" component={DoctorSelectionScreen} />

        {/* 13. appointment date */}
        <Stack.Screen name="appointment date" component={AppointmentDateScreen} />
        <Stack.Screen name="AppointmentDate" component={AppointmentDateScreen} />
        <Stack.Screen name="AppointmentDateScreen" component={AppointmentDateScreen} />
        <Stack.Screen name="SelectAppointmentDate" component={AppointmentDateScreen} />

        {/* 14. time slot */}
        <Stack.Screen name="time slot" component={TimeSlotScreen} />
        <Stack.Screen name="TimeSlot" component={TimeSlotScreen} />
        <Stack.Screen name="TimeSlotScreen" component={TimeSlotScreen} />
        <Stack.Screen name="SelectTimeSlot" component={TimeSlotScreen} />

        {/* 15. appointment details - before confirmation */}
        <Stack.Screen
          name="appointment details - before confirmation"
          component={AppointmentDetailsBeforeConfirmationScreen}
        />
        <Stack.Screen
          name="AppointmentDetailsBeforeConfirmation"
          component={AppointmentDetailsBeforeConfirmationScreen}
        />
        <Stack.Screen
          name="AppointmentDetailsBeforeConfirmationScreen"
          component={AppointmentDetailsBeforeConfirmationScreen}
        />
        <Stack.Screen
          name="AppointmentDetails"
          component={AppointmentDetailsBeforeConfirmationScreen}
        />

        {/* 16. review appointment */}
        <Stack.Screen name="review appointment" component={ReviewAppointmentScreen} />
        <Stack.Screen name="ReviewAppointment" component={ReviewAppointmentScreen} />
        <Stack.Screen name="ReviewAppointmentScreen" component={ReviewAppointmentScreen} />

        {/* 17. payment details */}
        <Stack.Screen name="payment details" component={PaymentDetailsScreen} />
        <Stack.Screen name="PaymentDetails" component={PaymentDetailsScreen} />
        <Stack.Screen name="PaymentDetailsScreen" component={PaymentDetailsScreen} />
        <Stack.Screen name="MakePayment" component={PaymentDetailsScreen} />

        {/* 18. payment success */}
        <Stack.Screen name="payment success" component={PaymentSuccessScreen} />
        <Stack.Screen name="PaymentSuccess" component={PaymentSuccessScreen} />
        <Stack.Screen name="PaymentSuccessScreen" component={PaymentSuccessScreen} />

        {/* 19. payment confirm */}
        <Stack.Screen name="payment confirm" component={PaymentConfirmScreen} />
        <Stack.Screen name="PaymentConfirm" component={PaymentConfirmScreen} />
        <Stack.Screen name="PaymentConfirmScreen" component={PaymentConfirmScreen} />
        <Stack.Screen name="AppointmentConfirmation" component={PaymentConfirmScreen} />

        {/* 20. upcoming appointment */}
        <Stack.Screen name="upcoming appointment" component={UpcomingAppointmentScreen} />
        <Stack.Screen name="UpcomingAppointment" component={UpcomingAppointmentScreen} />
        <Stack.Screen name="UpcomingAppointmentScreen" component={UpcomingAppointmentScreen} />
        <Stack.Screen name="MyAppointments" component={UpcomingAppointmentScreen} />

        {/* 21. appointment details - after confirmation */}
        <Stack.Screen
          name="appointment details - after confirmation"
          component={AppointmentDetailsAfterConfirmationScreen}
        />
        <Stack.Screen
          name="AppointmentDetailsAfterConfirmation"
          component={AppointmentDetailsAfterConfirmationScreen}
        />
        <Stack.Screen
          name="AppointmentDetailsAfterConfirmationScreen"
          component={AppointmentDetailsAfterConfirmationScreen}
        />

        {/* 22. reschedule appointment */}
        <Stack.Screen name="reschedule appointment" component={RescheduleAppointmentScreen} />
        <Stack.Screen name="RescheduleAppointment" component={RescheduleAppointmentScreen} />
        <Stack.Screen name="RescheduleAppointmentScreen" component={RescheduleAppointmentScreen} />

        {/* 23. cancel appointment */}
        <Stack.Screen name="cancel appointment" component={CancelAppointmentScreen} />
        <Stack.Screen name="CancelAppointment" component={CancelAppointmentScreen} />
        <Stack.Screen name="CancelAppointmentScreen" component={CancelAppointmentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
