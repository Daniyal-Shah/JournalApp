import React, { useMemo } from 'react';
import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { useTheme } from '../../theme/theme';
import { JournalEntry } from '../../types/journal';
import { createDashboardStyles } from './DashboardScreen.styles';
import { DashboardScreenProps } from './DashboardScreen.types';

const selfCareTasks = [
  'Take three slow, grounding breaths.',
  'Name one thing you are grateful for.',
  'Step away from your screen for two minutes.',
  'Send a kind message to yourself or a friend.',
];

const DashboardScreen = ({ navigation, entries }: DashboardScreenProps) => {
  const { theme } = useTheme();
  const styles = useMemo(() => createDashboardStyles(theme), [theme]);
  const latestEntry = useMemo(
    () => (entries.length > 0 ? entries[0] : null),
    [entries],
  );

  const renderEntry = ({ item }: { item: JournalEntry }) => {
    const date = new Date(item.createdAt);
    const dateLabel = date.toLocaleDateString();
    const timeLabel = date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });

    return (
      <View style={styles.entryCard}>
        <View style={styles.entryHeader}>
          <Text style={styles.entryDate}>
            {dateLabel} • {timeLabel}
          </Text>
        </View>
        <Text style={styles.entryContent}>{item.content}</Text>
      </View>
    );
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      bounces
    >
      <View style={styles.topBar}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.backLabel}>{'‹'}</Text>
        </TouchableOpacity>
        <Text style={styles.topBarTitle}>Good morning</Text>
        <View style={{ width: 32 }} />
      </View>

      <View style={styles.reflectCard}>
        <Text style={styles.reflectLabel}>What&apos;s on your mind?</Text>
        <Text style={styles.reflectSubtitle}>
          Your feelings deserve a little space today.
        </Text>
        {latestEntry ? (
          <View style={styles.latestEntryChip}>
            <Text numberOfLines={3} style={styles.latestEntryText}>
              {latestEntry.content}
            </Text>
          </View>
        ) : (
          <Text style={styles.reflectHint}>
            Your most recent reflection will appear here after you submit one.
          </Text>
        )}
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Your journal</Text>
        <Text style={styles.sectionSubtitle}>
          Entries are stored only while the app is open.
        </Text>
      </View>

      {entries.length === 0 ? (
        <View style={styles.emptyState}>
          <Text style={styles.emptyTitle}>No entries yet</Text>
          <Text style={styles.emptyCopy}>
            Start by reflecting on your day from the home screen. New entries
            will appear here with their date and time.
          </Text>
        </View>
      ) : (
        <FlatList
          data={entries}
          keyExtractor={item => item.id}
          renderItem={renderEntry}
          scrollEnabled={false}
        />
      )}

      <View style={styles.tasksSection}>
        <Text style={styles.tasksTitle}>Gentle tasks for today</Text>
        <Text style={styles.tasksSubtitle}>
          These are just suggestions to support your mental health.
        </Text>
        {selfCareTasks.map(task => (
          <View key={task} style={styles.taskRow}>
            <View style={styles.taskBullet} />
            <Text style={styles.taskText}>{task}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default DashboardScreen;
