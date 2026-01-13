import {StyleSheet} from 'react-native';
import {border} from '../../helpers/border.token';
import {fontSizes, fontWeights} from '../../helpers/font.token';
import {padding} from '../../helpers/sizes.token';
import {Theme} from '../../theme/theme';

export const createDashboardStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
  content: {
    padding: padding.xxl,
    paddingBottom: padding.xxxl,
    gap: padding.xxl,
  },
    topBar: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    backButton: {
      width: 32,
      height: 32,
      borderRadius: 16,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.borderSubtle,
    },
    backLabel: {
      fontSize: fontSizes.lg,
      color: theme.colors.textSecondary,
    },
    topBarTitle: {
      fontSize: fontSizes.lgPlus,
      fontWeight: fontWeights.semiBold,
      color: theme.colors.textPrimary,
    },
    reflectCard: {
      backgroundColor: theme.colors.cardAccent,
      borderRadius: border.xxxl,
      padding: padding.xxl,
      gap: padding.md,
    },
    reflectLabel: {
      fontSize: fontSizes.lgPlus,
      fontWeight: fontWeights.semiBold,
      color: theme.colors.textPrimary,
    },
    reflectSubtitle: {
      fontSize: fontSizes.base,
      color: theme.colors.textSecondary,
    },
    reflectHint: {
      fontSize: fontSizes.smPlus,
      color: theme.colors.textMuted,
    },
    latestEntryChip: {
      marginTop: padding.sm,
      backgroundColor: theme.colors.card,
      borderRadius: border.xxxl,
      padding: padding.lg,
    },
    latestEntryText: {
      fontSize: fontSizes.smPlus,
      color: theme.colors.textPrimary,
    },
  sectionHeader: {
    marginTop: padding.lg,
    gap: padding.xs,
  },
    sectionTitle: {
      fontSize: fontSizes.lg,
      fontWeight: fontWeights.semiBold,
      color: theme.colors.textPrimary,
    },
    sectionSubtitle: {
      fontSize: fontSizes.sm,
      color: theme.colors.textMuted,
    },
    emptyState: {
      marginTop: padding.lg,
      backgroundColor: theme.colors.card,
      borderRadius: border.xxxl,
      padding: padding.xxl,
    },
    emptyTitle: {
      fontSize: fontSizes.base,
      fontWeight: fontWeights.semiBold,
      color: theme.colors.textPrimary,
      marginBottom: padding.sm,
    },
    emptyCopy: {
      fontSize: fontSizes.smPlus,
      color: theme.colors.textSecondary,
    },
    entryCard: {
      backgroundColor: theme.colors.card,
      borderRadius: border.xxxl,
      padding: padding.xl,
      marginTop: padding.md,
    },
  entryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: padding.sm,
  },
    entryDate: {
      fontSize: fontSizes.xs,
      color: theme.colors.textMuted,
    },
    entryContent: {
      fontSize: fontSizes.smPlus,
      color: theme.colors.textPrimary,
    },
    tasksSection: {
      marginTop: padding.xxl,
      backgroundColor: theme.colors.cardAccent,
      borderRadius: border.xxxl,
      padding: padding.xxl,
    },
    tasksTitle: {
      fontSize: fontSizes.lg,
      fontWeight: fontWeights.semiBold,
      color: theme.colors.textOnPrimary,
      marginBottom: padding.xs,
    },
    tasksSubtitle: {
      fontSize: fontSizes.smPlus,
      color: theme.colors.textSecondary,
      marginBottom: padding.lg,
    },
  taskRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: padding.sm,
    marginBottom: padding.sm,
  },
    taskBullet: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: theme.colors.accentPink,
    },
    taskText: {
      flex: 1,
      fontSize: fontSizes.smPlus,
      color: theme.colors.textOnPrimary,
    },
  });
