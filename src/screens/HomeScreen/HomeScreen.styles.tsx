import {StyleSheet} from 'react-native';
import {border} from '../../helpers/border.token';
import {fontSizes, fontWeights} from '../../helpers/font.token';
import {padding} from '../../helpers/sizes.token';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F4FB',
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
    color: '#1E1B2E',
  },
  subtitle: {
    marginTop: padding.xs,
    fontSize: fontSizes.sm,
    color: '#7A7687',
  },
  reflectCard: {
    backgroundColor: '#F1E8FF',
    borderRadius: border.xxxl,
    padding: padding.xxl,
    marginBottom: padding.xxl,
  },
  reflectTitle: {
    fontSize: fontSizes.lgPlus,
    fontWeight: fontWeights.semiBold,
    color: '#3B256B',
  },
  reflectCopy: {
    fontSize: fontSizes.base,
    color: '#5A4B7A',
    marginVertical: padding.md,
  },
  reflectButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#A66CFF',
    paddingVertical: padding.sm,
    paddingHorizontal: padding.xxl,
    borderRadius: border.mdPlus,
  },
  reflectButtonText: {
    color: '#FFFFFF',
    fontSize: fontSizes.base,
    fontWeight: fontWeights.semiBold,
  },
  sectionHeader: {
    marginBottom: padding.lg,
  },
  sectionTitle: {
    fontSize: fontSizes.lg,
    fontWeight: fontWeights.semiBold,
    color: '#1E1B2E',
  },
  sectionSubtitle: {
    fontSize: fontSizes.sm,
    color: '#9A96A8',
    marginTop: padding.xs,
  },
  practiceCard: {
    flexDirection: 'row',
    gap: padding.md,
    backgroundColor: '#FFFFFF',
    borderRadius: border.xxxl,
    padding: padding.xl,
    marginBottom: padding.md,
    shadowColor: '#2D1D47',
    shadowOffset: {width: 0, height: 15},
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
    color: '#262137',
    marginRight: padding.sm,
  },
  practiceDuration: {
    fontSize: fontSizes.sm,
    color: '#A099B6',
  },
  practiceDescription: {
    fontSize: fontSizes.smPlus,
    color: '#6E6785',
    marginBottom: padding.sm,
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: padding.xs,
  },
  tagChip: {
    backgroundColor: '#F3F1F8',
    borderRadius: border.md,
    paddingVertical: 4,
    paddingHorizontal: padding.sm,
  },
  tagText: {
    fontSize: fontSizes.xs,
    color: '#6E6785',
  },
  progressCard: {
    marginTop: padding.xxl,
    backgroundColor: '#1F1235',
    borderRadius: border.xxxl,
    padding: padding.xxl,
  },
  progressLabel: {
    fontSize: fontSizes.sm,
    color: '#C7B8FF',
  },
  progressCount: {
    marginVertical: padding.sm,
    fontSize: fontSizes.xxxl,
    fontWeight: fontWeights.bold,
    color: '#FFFFFF',
  },
  progressHint: {
    fontSize: fontSizes.smPlus,
    color: '#D0C5FF',
    marginBottom: padding.lg,
  },
  dashboardButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#F4A9FF',
    borderRadius: border.lg,
    paddingHorizontal: padding.xxl,
    paddingVertical: padding.sm,
  },
  dashboardButtonText: {
    color: '#2F0F4A',
    fontSize: fontSizes.base,
    fontWeight: fontWeights.semiBold,
  },
});


