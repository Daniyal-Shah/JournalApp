import { StyleSheet } from 'react-native';
import { border } from '../../helpers/border.token';
import { fontSizes, fontWeights } from '../../helpers/font.token';
import { padding } from '../../helpers/sizes.token';
import { Theme } from '../../theme/theme';

export const createHomeStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    content: {
      padding: padding.xxl,
      paddingBottom: padding.xxxl,
    },
    header: {
      marginBottom: padding.lg,
    },
    greeting: {
      fontSize: fontSizes.xl,
      fontWeight: fontWeights.semiBold,
      color: theme.colors.textPrimary,
    },
    subtitle: {
      marginTop: padding.xs,
      fontSize: fontSizes.sm,
      color: theme.colors.textMuted,
    },
    reflectCard: {
      backgroundColor: theme.colors.cardAccent,
      borderRadius: border.xxxl,
      padding: padding.xxl,
      marginBottom: padding.xxl,
    },
    reflectTitle: {
      fontSize: fontSizes.lgPlus,
      fontWeight: fontWeights.semiBold,
      color: theme.colors.textPrimary,
    },
    reflectCopy: {
      fontSize: fontSizes.base,
      color: theme.colors.textSecondary,
      marginVertical: padding.md,
    },
    reflectButton: {
      alignSelf: 'flex-start',
      backgroundColor: theme.colors.primarySoft,
      paddingVertical: padding.sm,
      paddingHorizontal: padding.xxl,
      borderRadius: border.mdPlus,
    },
    reflectButtonText: {
      color: theme.colors.textOnPrimary,
      fontSize: fontSizes.base,
      fontWeight: fontWeights.semiBold,
    },
    sectionHeader: {
      marginBottom: padding.lg,
    },
    sectionTitle: {
      fontSize: fontSizes.lg,
      fontWeight: fontWeights.semiBold,
      color: theme.colors.textPrimary,
    },
    sectionSubtitle: {
      fontSize: fontSizes.sm,
      color: theme.colors.textMuted,
      marginTop: padding.xs,
    },
    practiceCard: {
      flexDirection: 'row',
      gap: padding.md,
      backgroundColor: theme.colors.card,
      borderRadius: border.xxxl,
      padding: padding.xl,
      marginBottom: padding.md,
      shadowColor: theme.colors.shadow,
      shadowOffset: { width: 0, height: 15 },
      shadowOpacity: 0.08,
      shadowRadius: 20,
      elevation: 4,
    },
    practiceIcon: {
      width: 48,
      height: 48,
      borderRadius: border.xl,
    },
    practiceBody: {
      flex: 1,
    },
    practiceHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: padding.xs,
    },
    practiceTitle: {
      flex: 1,
      fontSize: fontSizes.base,
      fontWeight: fontWeights.semiBold,
      color: theme.colors.textPrimary,
      marginRight: padding.sm,
    },
    practiceDuration: {
      fontSize: fontSizes.sm,
      color: theme.colors.textMuted,
    },
    practiceDescription: {
      fontSize: fontSizes.smPlus,
      color: theme.colors.textSecondary,
      marginBottom: padding.sm,
    },
    tagRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: padding.xs,
    },
    tagChip: {
      backgroundColor: theme.colors.backgroundAlt,
      borderRadius: border.md,
      paddingVertical: 4,
      paddingHorizontal: padding.sm,
    },
    tagText: {
      fontSize: fontSizes.xs,
      color: theme.colors.textSecondary,
    },
    progressCard: {
      marginTop: padding.xxl,
      backgroundColor: theme.colors.cardAccent,
      borderRadius: border.xxxl,
      padding: padding.xxl,
    },
    progressLabel: {
      fontSize: fontSizes.sm,
      color: theme.colors.textMuted,
    },
    progressCount: {
      marginVertical: padding.sm,
      fontSize: fontSizes.xxxl,
      fontWeight: fontWeights.bold,
      color: theme.colors.textOnPrimary,
    },
    progressHint: {
      fontSize: fontSizes.smPlus,
      color: theme.colors.textSecondary,
      marginBottom: padding.lg,
    },
    dashboardButton: {
      alignSelf: 'flex-start',
      backgroundColor: theme.colors.accentPink,
      borderRadius: border.lg,
      paddingHorizontal: padding.xxl,
      paddingVertical: padding.sm,
    },
    dashboardButtonText: {
      color: theme.colors.textOnPrimary,
      fontSize: fontSizes.base,
      fontWeight: fontWeights.semiBold,
    },
  });
