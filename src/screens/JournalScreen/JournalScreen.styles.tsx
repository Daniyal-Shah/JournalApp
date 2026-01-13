import { StyleSheet } from 'react-native';
import { border } from '../../helpers/border.token';
import { fontSizes, fontWeights } from '../../helpers/font.token';
import { padding } from '../../helpers/sizes.token';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F7FB',
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
    backgroundColor: '#EEE9F8',
  },
  backText: {
    fontSize: fontSizes.lg,
    color: '#4D4168',
  },
  headerLabel: {
    fontSize: fontSizes.sm,
    color: '#8B839F',
  },
  headerTitle: {
    fontSize: fontSizes.lgPlus,
    fontWeight: fontWeights.semiBold,
    color: '#1F1235',
  },
  textInput: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: border.xxxl,
    padding: padding.xxl,
    fontSize: fontSizes.mdPlus,
    textAlignVertical: 'top',
    color: '#2A1E3F',
    shadowColor: '#140B20',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.05,
    shadowRadius: 15,
    elevation: 2,
  },
  footer: {
    backgroundColor: '#FFFFFF',
    borderRadius: border.xxxl,
    padding: padding.xxl,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: padding.xxl,
  },
  charLabel: {
    fontSize: fontSizes.sm,
    color: '#8E88A5',
  },
  charCount: {
    fontSize: fontSizes.xxxl,
    fontWeight: fontWeights.semiBold,
    color: '#2F1C50',
  },
  actions: {
    flex: 1,
    alignItems: 'flex-end',
  },
  submitButton: {
    backgroundColor: '#7C3AED',
    borderRadius: border.xxxl,
    paddingHorizontal: padding.xxl,
    paddingVertical: padding.sm,
  },
  submitButtonDisabled: {
    backgroundColor: '#C8B8EE',
  },
  submitLabel: {
    color: '#FFFFFF',
    fontSize: fontSizes.base,
    fontWeight: fontWeights.semiBold,
  },
  error: {
    color: '#AD2C45',
    textAlign: 'center',
    marginTop: -padding.lg,
    fontSize: fontSizes.sm,
  },
});
