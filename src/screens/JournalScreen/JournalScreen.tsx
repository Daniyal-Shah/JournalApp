import {
  addSpeechEndListener,
  addSpeechErrorListener,
  addSpeechResultListener,
  isAvailable,
  requestPermissions,
  start,
  stop,
} from '@dbkable/react-native-speech-to-text';
import React, { useEffect, useMemo, useState } from 'react';
import type { EmitterSubscription } from 'react-native';
import {
  ActivityIndicator,
  Alert,
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
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

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

  useEffect(() => {
    const subscriptions: EmitterSubscription[] = [];

    // Set up speech result listener
    const resultListener = addSpeechResultListener(result => {
      if (result.transcript) {
        Alert.alert('Transcript Received', result.transcript);
        setEntry(prevEntry => {
          const currentText = prevEntry.trim();
          // Only append if it's a final result or if there's no existing text
          if (result.isFinal || !currentText) {
            const newText = currentText
              ? `${currentText} ${result.transcript}`
              : result.transcript;
            return newText.slice(0, MAX_CHARS);
          }
          // For partial results, replace the last partial result
          return result.transcript.slice(0, MAX_CHARS);
        });
      }
      setIsProcessing(false);
    });
    subscriptions.push(resultListener);

    // Set up error listener
    const errorListener = addSpeechErrorListener(error => {
      console.error('Speech error:', error);
      setIsRecording(false);
      setIsProcessing(false);
      setError('Voice recognition failed. Please try again.');
    });
    subscriptions.push(errorListener);

    // Set up end listener
    const endListener = addSpeechEndListener(() => {
      setIsRecording(false);
      setIsProcessing(false);
    });
    subscriptions.push(endListener);

    // Cleanup listeners on unmount
    return () => {
      subscriptions.forEach(sub => sub.remove());
    };
  }, []);

  const startVoiceRecognition = async () => {
    try {
      setError(null);
      setIsProcessing(true);

      // Check if speech recognition is available
      const available = await isAvailable();
      if (!available) {
        setError('Speech recognition is not available on this device.');
        setIsProcessing(false);
        return;
      }

      // Request permissions (especially important for Android)
      const hasPermission = await requestPermissions();
      if (!hasPermission) {
        setError('Microphone permission is required for voice recognition.');
        setIsProcessing(false);
        return;
      }

      // Start speech recognition
      await start({ language: 'en-US' });
      setIsRecording(true);
      setIsProcessing(false);
    } catch (err: any) {
      console.error('Error starting voice recognition:', err);
      setIsRecording(false);
      setIsProcessing(false);
      const errorMessage =
        err?.message ||
        'Failed to start voice recognition. Please check permissions.';
      setError(errorMessage);
    }
  };

  const stopVoiceRecognition = async () => {
    try {
      await stop();
      setIsRecording(false);
      setIsProcessing(false);
    } catch (err) {
      console.error('Error stopping voice recognition:', err);
      setIsRecording(false);
      setIsProcessing(false);
    }
  };

  const handleVoiceToggle = () => {
    if (isRecording) {
      stopVoiceRecognition();
    } else {
      startVoiceRecognition();
    }
  };

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

      <View style={styles.inputContainer}>
        <TextInput
          value={entry}
          onChangeText={text => setEntry(text.slice(0, MAX_CHARS))}
          multiline
          placeholder="Start writing..."
          placeholderTextColor="#B8B3C7"
          style={styles.textInput}
        />
        <TouchableOpacity
          style={[styles.voiceButton, isRecording && styles.voiceButtonActive]}
          onPress={handleVoiceToggle}
          disabled={isProcessing}
        >
          {isProcessing ? (
            <ActivityIndicator
              size="small"
              color={theme.colors.textOnPrimary}
            />
          ) : (
            <Text style={styles.voiceButtonText}>
              {isRecording ? '⏹' : '🎤'}
            </Text>
          )}
        </TouchableOpacity>
      </View>

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
