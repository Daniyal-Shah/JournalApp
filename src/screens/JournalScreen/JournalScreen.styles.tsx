import { StyleSheet } from 'react-native';
import { border } from '../../helpers/border.token';
import { fontSizes, fontWeights } from '../../helpers/font.token';
import { padding } from '../../helpers/sizes.token';
import { Theme } from '../../theme/theme';

export const createJournalStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.backgroundAlt,
      padding: padding.xxl,
      gap: padding.xxl,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    headerCenter: {
      flex: 1,
      alignItems: 'center',
    },
    headerSpacer: {
      width: 32,
    },
    backButton: {
      width: 32,
      height: 32,
      borderRadius: 16,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.borderSubtle,
    },
    backText: {
      fontSize: fontSizes.lg,
      color: theme.colors.textSecondary,
    },
    headerLabel: {
      fontSize: fontSizes.sm,
      color: theme.colors.textMuted,
    },
    headerTitle: {
      fontSize: fontSizes.lgPlus,
      fontWeight: fontWeights.semiBold,
      color: theme.colors.textPrimary,
    },
    textInput: {
      flex: 1,
      backgroundColor: theme.colors.card,
      borderRadius: border.xxxl,
      padding: padding.xxl,
      fontSize: fontSizes.mdPlus,
      textAlignVertical: 'top',
      color: theme.colors.textPrimary,
      shadowColor: theme.colors.shadow,
      shadowOffset: { width: 0, height: 12 },
      shadowOpacity: 0.05,
      shadowRadius: 15,
      elevation: 2,
    },
    footer: {
      backgroundColor: theme.colors.card,
      borderRadius: border.xxxl,
      padding: padding.xxl,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: padding.xxl,
    },
    charLabel: {
      fontSize: fontSizes.sm,
      color: theme.colors.textMuted,
    },
    charCount: {
      fontSize: fontSizes.xxxl,
      fontWeight: fontWeights.semiBold,
      color: theme.colors.textPrimary,
    },
    actions: {
      flex: 1,
      alignItems: 'flex-end',
    },
    submitButton: {
      backgroundColor: theme.colors.primary,
      borderRadius: border.xxxl,
      paddingHorizontal: padding.xxl,
      paddingVertical: padding.sm,
    },
    submitButtonDisabled: {
      backgroundColor: theme.colors.primarySoft,
    },
    submitLabel: {
      color: theme.colors.textOnPrimary,
      fontSize: fontSizes.base,
      fontWeight: fontWeights.semiBold,
    },
    error: {
      color: theme.colors.danger,
      textAlign: 'center',
      marginTop: -padding.lg,
      fontSize: fontSizes.sm,
    },
  });
