import {moderateScale} from 'react-native-size-matters';

export const fontSizes = {
  // Micro and helper text
  mini: moderateScale(8),
  miniPlus: moderateScale(9),
  micro: moderateScale(10),
  tiny: moderateScale(11),

  // Caption, small label
  xxs: moderateScale(12),
  xs: moderateScale(13),

  // Small body text
  sm: moderateScale(14),
  smPlus: moderateScale(15),

  // Base body text
  base: moderateScale(16),
  md: moderateScale(17),

  // Enhanced readability body sizes
  mdPlus: moderateScale(18),
  lg: moderateScale(20),

  // Subheadings, UI titles
  lgPlus: moderateScale(22),
  xl: moderateScale(24),

  // Section headers
  xlPlus: moderateScale(26),
  xxl: moderateScale(28),
  xxlPlus: moderateScale(30),

  // Headings
  xxxl: moderateScale(32),
  xxxlPlus: moderateScale(36),
  heading4xl: moderateScale(40),
  heading5xl: moderateScale(44),

  // Display titles
  displaySm: moderateScale(48),
  displayMd: moderateScale(56),
  displayLg: moderateScale(64),
  displayXl: moderateScale(72),

  // Super display (e.g. splash)
  hero: moderateScale(80),
  heroXL: moderateScale(96),
  heroXXL: moderateScale(120),
};

export const fontWeights = {
  thin: '100' as const,
  light: '300' as const,
  regular: '400' as const,
  medium: '500' as const,
  semiBold: '600' as const,
  bold: '700' as const,
  extraBold: '800' as const,
  black: '900' as const,
};

export const fontFamilies = {
  regular: 'Montserrat-Regular',
  medium: 'Montserrat-Medium',
  semiBold: 'Montserrat-SemiBold',
  bold: 'Montserrat-Bold',
  italic: 'Montserrat-Italic',
  light: 'Montserrat-Light',
};
