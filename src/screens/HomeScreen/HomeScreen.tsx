import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';

import {styles} from './HomeScreen.styles';
import {HomeScreenProps} from './HomeScreen.types';

const practices = [
  {
    id: 'hrv',
    title: 'HRV Breathing Technique',
    description:
      'Heart Rate Variability practice that teaches your nervous system to slow down.',
    tags: ['Relaxation', 'Breathwork'],
    duration: '3 min',
    accent: '#7DA9FF',
  },
  {
    id: 'critic',
    title: 'Inner Critic Soothing',
    description:
      'IFS-inspired prompt to externalize the critic and respond with compassion.',
    tags: ['Reflection', 'IFS'],
    duration: '10 min',
    accent: '#4FD8C4',
  },
  {
    id: 'brain',
    title: "Your Brain's Not Broken",
    description:
      'Micro lesson on how to reframe setbacks before you start your day.',
    tags: ['Mindset', 'Education'],
    duration: '5 min',
    accent: '#FF9E7C',
  },
];

const HomeScreen = ({entriesCount, navigation}: HomeScreenProps) => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Good morning</Text>
        <Text style={styles.subtitle}>Tu 04</Text>
      </View>

      <View style={styles.reflectCard}>
        <Text style={styles.reflectTitle}>What&apos;s on your mind?</Text>
        <Text style={styles.reflectCopy}>
          Your feelings deserve space today. Press reflect to capture them.
        </Text>
        <TouchableOpacity
          style={styles.reflectButton}
          onPress={() => navigation.navigate('Journal')}>
          <Text style={styles.reflectButtonText}>Reflect</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Start your day</Text>
        <Text style={styles.sectionSubtitle}>Static practice cards</Text>
      </View>

      {practices.map(practice => (
        <View key={practice.id} style={styles.practiceCard}>
          <View style={[styles.practiceIcon, {backgroundColor: practice.accent}]} />
          <View style={styles.practiceBody}>
            <View style={styles.practiceHeader}>
              <Text style={styles.practiceTitle}>{practice.title}</Text>
              <Text style={styles.practiceDuration}>{practice.duration}</Text>
            </View>
            <Text style={styles.practiceDescription}>{practice.description}</Text>
            <View style={styles.tagRow}>
              {practice.tags.map(tag => (
                <View key={tag} style={styles.tagChip}>
                  <Text style={styles.tagText}>{tag}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      ))}

      <View style={styles.progressCard}>
        <Text style={styles.progressLabel}>Entries logged</Text>
        <Text style={styles.progressCount}>{entriesCount}</Text>
        <Text style={styles.progressHint}>
          Visit the dashboard to review your previous reflections.
        </Text>
        <TouchableOpacity
          style={styles.dashboardButton}
          onPress={() => navigation.navigate('Dashboard')}>
          <Text style={styles.dashboardButtonText}>Open dashboard</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;


