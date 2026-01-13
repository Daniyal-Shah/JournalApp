import { StyleSheet } from 'react-native';
import { border } from '../../helpers/border.token';
import { fontSizes, fontWeights } from '../../helpers/font.token';
import { padding } from '../../helpers/sizes.token';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F4FB',
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
    backgroundColor: '#EEE9F8',
  },
  backLabel: {
    fontSize: fontSizes.lg,
    color: '#4D4168',
  },
  topBarTitle: {
    fontSize: fontSizes.lgPlus,
    fontWeight: fontWeights.semiBold,
    color: '#1E1B2E',
  },
  reflectCard: {
    backgroundColor: '#F1E8FF',
    borderRadius: border.xxxl,
    padding: padding.xxl,
    gap: padding.md,
  },
  reflectLabel: {
    fontSize: fontSizes.lgPlus,
    fontWeight: fontWeights.semiBold,
    color: '#3B256B',
  },
  reflectSubtitle: {
    fontSize: fontSizes.base,
    color: '#5A4B7A',
  },
  reflectHint: {
    fontSize: fontSizes.smPlus,
    color: '#8A81A1',
  },
  latestEntryChip: {
    marginTop: padding.sm,
    backgroundColor: '#FFFFFF',
    borderRadius: border.xxxl,
    padding: padding.lg,
  },
  latestEntryText: {
    fontSize: fontSizes.smPlus,
    color: '#32244F',
  },
  sectionHeader: {
    marginTop: padding.lg,
    gap: padding.xs,
  },
  sectionTitle: {
    fontSize: fontSizes.lg,
    fontWeight: fontWeights.semiBold,
    color: '#1E1B2E',
  },
  sectionSubtitle: {
    fontSize: fontSizes.sm,
    color: '#9A96A8',
  },
  emptyState: {
    marginTop: padding.lg,
    backgroundColor: '#FFFFFF',
    borderRadius: border.xxxl,
    padding: padding.xxl,
  },
  emptyTitle: {
    fontSize: fontSizes.base,
    fontWeight: fontWeights.semiBold,
    color: '#262137',
    marginBottom: padding.sm,
  },
  emptyCopy: {
    fontSize: fontSizes.smPlus,
    color: '#6E6785',
  },
  entryCard: {
    backgroundColor: '#FFFFFF',
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
    color: '#9A96A8',
  },
  entryContent: {
    fontSize: fontSizes.smPlus,
    color: '#2A1E3F',
  },
  tasksSection: {
    marginTop: padding.xxl,
    backgroundColor: '#1F1235',
    borderRadius: border.xxxl,
    padding: padding.xxl,
  },
  tasksTitle: {
    fontSize: fontSizes.lg,
    fontWeight: fontWeights.semiBold,
    color: '#FFFFFF',
    marginBottom: padding.xs,
  },
  tasksSubtitle: {
    fontSize: fontSizes.smPlus,
    color: '#C7B8FF',
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
    backgroundColor: '#F4A9FF',
  },
  taskText: {
    flex: 1,
    fontSize: fontSizes.smPlus,
    color: '#E9E3FF',
  },
});
