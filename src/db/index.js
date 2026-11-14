import { createContext, useContext, useState } from 'react';
import db from './db.json';

const UserContext = createContext();

export function UserProvider({ children }) {
  const initialUser = fetchUserProfile() || {
    fullName: 'Daniel David',
    dob: '12 Feb 1995',
    gender: 'Male',
    bloodGroup: 'O+',
    mobile: '+91 98765 43210',
    email: 'daniel.david@email.com',
    address: '23, Lake View road,\nChennai - 600041,\nTamil Nadu.',
    patientId: 'LUXP104563',
  };

  const [userData, setUserData] = useState(initialUser);

  const updateUserData = (newData) => {
    setUserData((prev) => ({
      ...prev,
      ...newData,
      patientId:
        prev.patientId ||
        `LUXP${Math.floor(100000 + Math.random() * 900000)}`,
    }));
  };

  return (
    <UserContext.Provider value={{ userData, updateUserData }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}

// Image assets mapping for backend responses
const IMAGES = {
  // Specialties
  general_physician: require('../assets/images/specialties/general_physician.png'),
  cardiologist: require('../assets/images/specialties/cardiologist.png'),
  neurologist: require('../assets/images/specialties/neurologist.png'),
  orthopedic: require('../assets/images/specialties/orthopedic.png'),
  dermatologist: require('../assets/images/specialties/dermatologist.png'),
  pediatrician: require('../assets/images/specialties/pediatrician.png'),
  gynecologist: require('../assets/images/specialties/gynecologist.png'),
  ophthalmologist: require('../assets/images/specialties/ophthalmologist.png'),
  ent_specialist: require('../assets/images/specialties/ent_specialist.png'),
  dentist: require('../assets/images/specialties/dentist.png'),
  pulmonologist: require('../assets/images/specialties/pulmonologist.png'),
  psychiatrist: require('../assets/images/specialties/psychiatrist.png'),
  gastroenterologist: require('../assets/images/specialties/gastroenterologist.png'),
  nephrologist: require('../assets/images/specialties/nephrologist.png'),
  oncologist: require('../assets/images/specialties/oncologist.png'),

  // Departments
  pharmacy: require('../assets/images/departments/pharmacy.png'),
  nursing: require('../assets/images/departments/nursing.png'),
  physiotherapy: require('../assets/images/departments/physiotherapy.png'),
  treatment_room: require('../assets/images/departments/treatment_room.png'),
  laboratory: require('../assets/images/departments/laboratory.png'),
  radiology: require('../assets/images/departments/radiology.png'),
  emergency: require('../assets/images/departments/emergency.png'),
  inpatient: require('../assets/images/departments/inpatient.png'),

  // Doctors
  doc_female_1: require('../assets/images/doctors/doc_female_1.png'),
  doc_female_2: require('../assets/images/doctors/doc_female_2.png'),
  doc_female_3: require('../assets/images/doctors/doc_female_3.png'),
  doc_female_4: require('../assets/images/doctors/doc_female_4.png'),
  doc_male_1: require('../assets/images/doctors/doc_male_1.png'),
  doc_male_2: require('../assets/images/doctors/doc_male_2.png'),
  doc_male_3: require('../assets/images/doctors/doc_male_3.png'),
};

// In-memory appointments list initialized from db.json
let liveAppointments = db.appointments.map((item) => ({ ...item }));

// In-memory registered users initialized from db.json
let liveUsers = db.users.map((item) => ({ ...item }));

/**
 * Backend Database API Services
 */
export const fetchSpecialties = () => {
  return db.specialties.map((item) => ({
    ...item,
    image: IMAGES[item.imageKey] || IMAGES.general_physician,
  }));
};

export const fetchDepartments = () => {
  return db.departments.map((item) => ({
    ...item,
    image: IMAGES[item.imageKey] || IMAGES.pharmacy,
  }));
};

export const fetchDoctors = () => {
  return db.doctors.map((item) => ({
    ...item,
    image: IMAGES[item.imageKey] || IMAGES.doc_female_1,
  }));
};

export const fetchTimeSlots = () => {
  return db.timeSlots;
};

export const fetchHospitalInfo = () => {
  return db.hospitals[0];
};

export const fetchHospitalFeatures = () => {
  return db.hospitals[0]?.features || [];
};

export const fetchAppointments = () => {
  return liveAppointments.map((item) => ({
    ...item,
    doctorImage:
      item.doctorImage ||
      IMAGES[item.doctorImageKey] ||
      IMAGES.doc_female_1,
  }));
};

export const updateAppointment = (id, updates) => {
  liveAppointments = liveAppointments.map((item) => {
    if (item.id === id) {
      return { ...item, ...updates };
    }
    return item;
  });
  // Also reflect in raw db.appointments
  const rawIdx = db.appointments.findIndex((item) => item.id === id);
  if (rawIdx !== -1) {
    db.appointments[rawIdx] = { ...db.appointments[rawIdx], ...updates };
  }
  return fetchAppointments();
};

export const addAppointment = (newApt) => {
  const item = {
    id: newApt.id || `apt-${Date.now()}`,
    bookingId:
      newApt.bookingId ||
      `LUXAP${Math.floor(100000 + Math.random() * 900000)}`,
    doctorName: newApt.doctorName || newApt.doctor?.name || 'Dr. Priya menon',
    specialty: newApt.specialty || newApt.department || 'General Physician',
    doctorImageKey: newApt.doctorImageKey || 'doc_female_1',
    doctorImage:
      newApt.doctorImage || (newApt.doctor?.image ? newApt.doctor.image : null),
    date:
      newApt.date ||
      `${newApt.appointmentDate || '14 Nov 2026'}, ${newApt.appointmentTime || '10:00 AM'}`,
    hospital: newApt.hospital || 'LUX Healthcare Hospital',
    amount: newApt.amount || newApt.totalPaid || 743.0,
    status: 'Upcoming',
    ...newApt,
  };
  liveAppointments = [item, ...liveAppointments];
  return fetchAppointments();
};

export const fetchUsers = () => {
  return liveUsers;
};

export const fetchUserProfile = () => {
  return liveUsers[0] || null;
};

/**
 * Clean and normalize phone/email for matching
 */
const cleanIdentifier = (str = '') => {
  return str.trim().toLowerCase().replace(/[\s\-\(\)]/g, '');
};

export const findUserByIdentifier = (identifier = '') => {
  if (!identifier) return null;
  const target = cleanIdentifier(identifier);
  return (
    liveUsers.find((u) => {
      const email = cleanIdentifier(u.email);
      const mobile = cleanIdentifier(u.mobile);
      const patientId = cleanIdentifier(u.patientId);
      return email === target || mobile === target || patientId === target;
    }) || null
  );
};

export const authenticateUser = (identifier = '', password = '') => {
  const trimmedId = (identifier || '').trim();
  const trimmedPass = (password || '').trim();

  if (!trimmedId || !trimmedPass) {
    return {
      success: false,
      error: 'Please enter both Email/Mobile and Password.',
    };
  }

  const user = findUserByIdentifier(trimmedId);
  if (!user) {
    return {
      success: false,
      error:
        'Account not found. This Email or Mobile is not registered. Please create a new account.',
    };
  }

  if (user.password !== trimmedPass) {
    return {
      success: false,
      error: 'Incorrect password. Please verify and try again.',
    };
  }

  return {
    success: true,
    user,
  };
};

export const registerUser = (userData = {}) => {
  const email = (userData.email || '').trim().toLowerCase();
  const mobile = (userData.mobile || '').trim();

  if (email && findUserByIdentifier(email)) {
    return {
      success: false,
      error: 'An account with this email address is already registered.',
    };
  }
  if (mobile && findUserByIdentifier(mobile)) {
    return {
      success: false,
      error: 'An account with this mobile number is already registered.',
    };
  }

  const newUser = {
    id: `u_${Date.now()}`,
    patientId:
      userData.patientId ||
      `LUXP${Math.floor(100000 + Math.random() * 900000)}`,
    fullName: (userData.fullName || '').trim() || 'Registered Patient',
    dob: (userData.dob || '').trim() || '12 Feb 1995',
    gender: userData.gender || 'Male',
    bloodGroup: userData.bloodGroup || 'O+',
    mobile: mobile || '+91 98765 00000',
    email: email || 'patient@hospital.com',
    password: userData.password || 'password123',
    address:
      (userData.address || '').trim() ||
      '23, Lake View road, Chennai - 600041, Tamil Nadu.',
    ...userData,
  };

  liveUsers = [newUser, ...liveUsers];
  if (db.users) {
    db.users = [newUser, ...db.users];
  }

  return {
    success: true,
    user: newUser,
  };
};

export const updateUserPassword = (identifier = '', newPassword = '') => {
  const user = findUserByIdentifier(identifier);
  if (!user) {
    return {
      success: false,
      error: 'Account not found.',
    };
  }

  liveUsers = liveUsers.map((u) => {
    if (u.id === user.id) {
      return { ...u, password: newPassword };
    }
    return u;
  });

  const rawIdx = db.users.findIndex((u) => u.id === user.id);
  if (rawIdx !== -1) {
    db.users[rawIdx] = { ...db.users[rawIdx], password: newPassword };
  }

  return {
    success: true,
    user: { ...user, password: newPassword },
  };
};

export const fetchDashboardServices = () => {
  return db.dashboardServices || [];
};

export const fetchBillingConfig = () => {
  return (
    db.billingConfig || {
      genericCharge: 30.0,
      taxUtility: 13.0,
      currency: '₹',
      currencyCode: 'INR',
    }
  );
};

export const fetchPaymentMethods = () => {
  return db.paymentMethods || [];
};

export const fetchCancellationConfig = () => {
  return (
    db.cancellationConfig || {
      notice: '5 - 10 minutes for appointment cancellation may apply',
      reasons: [
        'Schedule not suitable',
        'Facing other',
        'Booked by mistake',
        'Other',
      ],
    }
  );
};

export const fetchDoctorById = (id) => {
  const doctors = fetchDoctors();
  return doctors.find((d) => String(d.id) === String(id)) || null;
};

export const fetchAppointmentById = (id) => {
  const appointments = fetchAppointments();
  return appointments.find((a) => String(a.id) === String(id)) || null;
};

export const getSpecialties = fetchSpecialties;
export const getDepartments = fetchDepartments;
export const getDoctors = fetchDoctors;
export const getDoctorById = fetchDoctorById;
export const getTimeSlots = fetchTimeSlots;
export const getHospitalInfo = fetchHospitalInfo;
export const getHospitalFeatures = fetchHospitalFeatures;
export const getAppointments = fetchAppointments;
export const getAppointmentById = fetchAppointmentById;
export const getUsers = fetchUsers;
export const getUserProfile = fetchUserProfile;
export const getDashboardServices = fetchDashboardServices;
export const getBillingConfig = fetchBillingConfig;
export const getPaymentMethods = fetchPaymentMethods;
export const getCancellationConfig = fetchCancellationConfig;

export default {
  fetchSpecialties,
  fetchDepartments,
  fetchDoctors,
  fetchDoctorById,
  fetchTimeSlots,
  fetchHospitalInfo,
  fetchHospitalFeatures,
  fetchAppointments,
  fetchAppointmentById,
  updateAppointment,
  addAppointment,
  fetchUsers,
  fetchUserProfile,
  findUserByIdentifier,
  authenticateUser,
  registerUser,
  updateUserPassword,
  fetchDashboardServices,
  fetchBillingConfig,
  fetchPaymentMethods,
  fetchCancellationConfig,
  raw: db,
};

