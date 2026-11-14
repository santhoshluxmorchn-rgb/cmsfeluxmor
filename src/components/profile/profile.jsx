import {
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BottomNav from '../../navigation/BottomNav';
import { useUser } from '../../db';
import styles from './profile.styles';

export default function ProfileScreen({ navigation }) {
  const { userData } = useUser();

  const formattedAddress = userData.address
    ? userData.address.replace(/\n/g, ' ')
    : '23, Lake View road, Chennai - 600041, Tamil Nadu.';

  return (
    <ImageBackground
      source={require('../../assets/images/profile-bg.jpg')}
      style={styles.container}
      resizeMode="stretch"
    >
      <View style={styles.content}>
        <View style={styles.topRow}>
          <TouchableOpacity style={styles.notificationBtn}>
            <MaterialCommunityIcons
              name="bell"
              size={26}
              color="#2F36C6"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.userHeader}>
          <Image
            source={require('../../assets/images/avatar.jpg')}
            style={styles.avatar}
            resizeMode="cover"
          />
          <View style={styles.userInfo}>
            <Text style={styles.profileHeading}>Patient Profile</Text>
            <Text style={styles.userName}>{userData.fullName}</Text>
            <View style={styles.idRow}>
              <Text style={styles.patientId}>
                Patient ID: {userData.patientId || 'LUXP104563'}
              </Text>
              <TouchableOpacity>
                <MaterialCommunityIcons
                  name="content-copy"
                  size={15}
                  color="#2F36C6"
                />
              </TouchableOpacity>
            </View>
            <View style={styles.badge}>
              <FontAwesome5 name="user-check" size={12} color="#16A34A" />
              <Text style={styles.badgeText}>Registered Patient</Text>
              <Ionicons name="checkmark" size={14} color="#16A34A" />
            </View>
          </View>
        </View>

        <View style={styles.detailsCard}>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Date of Birth</Text>
            <Text style={styles.detailValue}>: {userData.dob}</Text>
          </View>
          <View style={styles.divider} />

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Gender</Text>
            <Text style={styles.detailValue}>: {userData.gender}</Text>
          </View>
          <View style={styles.divider} />

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Blood Group</Text>
            <Text style={styles.detailValue}>: {userData.bloodGroup}</Text>
          </View>
          <View style={styles.divider} />

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Mobil Number</Text>
            <Text style={styles.detailValue}>: {userData.mobile}</Text>
          </View>
          <View style={styles.divider} />

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Email Address</Text>
            <Text style={styles.detailValue}>: {userData.email}</Text>
          </View>
          <View style={styles.divider} />

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Address</Text>
            <Text style={styles.detailValue}>: {formattedAddress}</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.editButton} activeOpacity={0.8}>
          <MaterialCommunityIcons
            name="pencil-outline"
            size={18}
            color="#FFFFFF"
          />
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>

        <View style={styles.actionRow}>
          <TouchableOpacity style={styles.actionCard} activeOpacity={0.8}>
            <MaterialCommunityIcons
              name="hospital-box-outline"
              size={26}
              color="#0F172A"
            />
            <Text style={styles.actionText}>Medical{'\n'}Records</Text>
            <Ionicons name="chevron-forward" size={16} color="#0F172A" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionCard} activeOpacity={0.8}>
            <MaterialCommunityIcons
              name="account-group-outline"
              size={26}
              color="#0F172A"
            />
            <Text style={styles.actionText}>Emergency{'\n'}Contact</Text>
            <Ionicons name="chevron-forward" size={16} color="#0F172A" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionCard} activeOpacity={0.8}>
            <MaterialCommunityIcons
              name="shield-plus-outline"
              size={26}
              color="#0F172A"
            />
            <Text style={styles.actionText}>Insurance{'\n'}Details</Text>
            <Ionicons name="chevron-forward" size={16} color="#0F172A" />
          </TouchableOpacity>
        </View>
      </View>

      <BottomNav activeTab="Profile" navigation={navigation} />
    </ImageBackground>
  );
}

