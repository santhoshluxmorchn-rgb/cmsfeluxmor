import { Feather, Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { getSpecialties } from '../../db';
import styles from './health issue selection.styles';

const HEALTH_ISSUES = getSpecialties();

export default function HealthIssueSelectionScreen({ navigation, route }) {
  const userName = route?.params?.userName || 'Daniel';
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedId, setSelectedId] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const baseIssues = showAll || searchQuery.trim() ? HEALTH_ISSUES : HEALTH_ISSUES.slice(0, 12);
  const filteredIssues = baseIssues.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderItem = ({ item }) => {
    const isSelected = selectedId === item.id;
    return (
      <TouchableOpacity
        style={[styles.card, isSelected && styles.selectedCard]}
        onPress={() => {
          setSelectedId(item.id);
          navigation.navigate('department selection', {
            userName,
            healthIssue: item.title,
          });
        }}
        activeOpacity={0.8}
      >
        <Image source={item.image} style={styles.cardImage} resizeMode="cover" />
        <View style={styles.cardInfo}>
          <View style={styles.textContainer}>
            <Text style={styles.cardTitle} numberOfLines={1}>
              {item.title}
            </Text>
            <Text style={styles.cardDesc} numberOfLines={1}>
              {item.desc}
            </Text>
          </View>
          <Feather name="arrow-right" size={11} color="#0F172A" />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ImageBackground
      source={require('../../assets/images/health-issues-bg.jpg')}
      style={styles.container}
      resizeMode="cover"
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
        </View>

        <Text style={styles.headerTitle}>Select Yor Health Issue</Text>
        <Text style={styles.headerSubtitle}>
          Choose the main health issue{'\n'}for your consultation.
        </Text>

        <View style={styles.searchBar}>
          <Feather name="search" size={18} color="#0F172A" />
          <TextInput
            placeholder="Search health issue...."
            placeholderTextColor="#64748B"
            value={searchQuery}
            onChangeText={setSearchQuery}
            style={styles.searchInput}
          />
        </View>

        <FlatList
          data={filteredIssues}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={3}
          columnWrapperStyle={styles.columnWrapper}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          ListFooterComponent={
            !searchQuery.trim() ? (
              <TouchableOpacity
                style={styles.viewMoreButton}
                onPress={() => setShowAll((prev) => !prev)}
                activeOpacity={0.85}
              >
                <Text style={styles.viewMoreText}>
                  {showAll ? 'Show Less Health Issues' : 'View More Health Issues'}
                </Text>
              </TouchableOpacity>
            ) : null
          }
        />
      </View>
    </ImageBackground>
  );
}
