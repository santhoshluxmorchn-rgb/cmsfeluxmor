import {
  Feather,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { useState } from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { getDepartments } from '../../db';
import styles from './department selection.styles';

const DEPARTMENTS = getDepartments();

export default function DepartmentSelectionScreen({ navigation, route }) {
  const userName = route?.params?.userName || 'Daniel';
  const healthIssue = route?.params?.healthIssue || '';
  const [selectedId, setSelectedId] = useState(null);

  const renderIcon = (item) => {
    if (item.iconLib === 'mci') {
      return (
        <MaterialCommunityIcons
          name={item.iconName}
          size={18}
          color="#0F172A"
        />
      );
    }
    return <FontAwesome5 name={item.iconName} size={15} color="#0F172A" />;
  };

  const renderItem = ({ item }) => {
    const isSelected = selectedId === item.id;
    return (
      <TouchableOpacity
        style={[styles.card, isSelected && styles.selectedCard]}
        onPress={() => {
          setSelectedId(item.id);
          navigation.navigate('DoctorSelection', {
            userName,
            department: item.title.replace('\n', ' '),
            healthIssue,
          });
        }}
        activeOpacity={0.85}
      >
        <Image source={item.image} style={styles.cardImage} resizeMode="cover" />
        <View style={styles.cardInfo}>
          <View style={styles.iconWrapper}>{renderIcon(item)}</View>
          <Text style={styles.cardTitle} numberOfLines={2}>
            {item.title}
          </Text>
          <Feather name="arrow-right" size={14} color="#0F172A" />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ImageBackground
      source={require('../../assets/images/health-issues-bg.jpg')}
      style={styles.container}
      resizeMode="stretch"
    >
      <View style={styles.content}>
        <View style={styles.topRow}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => navigation.goBack()}
            activeOpacity={0.7}
          >
            <Ionicons name="chevron-back" size={26} color="#2F36C6" />
          </TouchableOpacity>
          <View style={styles.titleWrapper}>
            <Text style={styles.headerTitle}>Select Department</Text>
          </View>
          <View style={styles.placeholder} />
        </View>

        <FlatList
          data={DEPARTMENTS}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapper}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
        />
      </View>
    </ImageBackground>
  );
}

