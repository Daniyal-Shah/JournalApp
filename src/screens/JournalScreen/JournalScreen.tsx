import React, { useMemo, useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { useTheme } from '../../theme/theme';
import { createJournalStyles } from './JournalScreen.styles';
import { JournalScreenProps } from './JournalScreen.types';

const MAX_CHARS = 600;

const JournalScreen = ({ navigation, onSubmit }: JournalScreenProps) => {
  const { theme } = useTheme();
  const styles = useMemo(() => createJournalStyles(theme), [theme]);
  const [entry, setEntry] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = () => {
    if (!entry.trim()) {
      return;
    }
    onSubmit(entry.trim());
    navigation.navigate('Dashboard');
    setEntry('');
    setError(null);
  };

  const charactersLeft = useMemo(
    () => Math.max(0, MAX_CHARS - entry.length),
    [entry],
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backText}>{'‹'}</Text>
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <Text style={styles.headerLabel}>Tu, Nov 4</Text>
          <Text style={styles.headerTitle}>What&apos;s on your mind?</Text>
        </View>
        <View style={styles.headerSpacer} />
      </View>

      <TextInput
        value={entry}
        onChangeText={text => setEntry(text.slice(0, MAX_CHARS))}
        multiline
        placeholder="Start writing..."
        placeholderTextColor="#B8B3C7"
        style={styles.textInput}
      />

      <View style={styles.footer}>
        <View>
          <Text style={styles.charLabel}>Characters left</Text>
          <Text style={styles.charCount}>{charactersLeft}</Text>
        </View>
        <View style={styles.actions}>
          <TouchableOpacity
            style={[
              styles.submitButton,
              !entry.trim() && styles.submitButtonDisabled,
            ]}
            disabled={!entry.trim()}
            onPress={handleSubmit}
          >
            <Text style={styles.submitLabel}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>

      {error ? <Text style={styles.error}>{error}</Text> : null}
    </KeyboardAvoidingView>
  );
};

export default JournalScreen;
