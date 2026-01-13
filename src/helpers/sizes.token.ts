import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

// Function to handle responsive font sizes
export const getFontSize = (size: number) => {
  return moderateScale(size);
};

// Function to handle margin/padding scaling for general layout (with flexibility)
export const getHorizontalScale = (size: number) => {
  return scale(size);
};

// Function for vertical scaling (useful for margin/padding that should vary vertically)
export const getVerticalScale = (size: number) => {
  return verticalScale(size);
};

export const getModerateScale = (size: number, factor: number = 0.5) => {
  return moderateScale(size, factor);
};

export const padding = {
  none: 0,
  xxs: scale(2),
  xs: scale(4),
  sm: scale(8),
  md: scale(12),
  lg: scale(16),
  xl: scale(20),
  xxl: scale(24),
  xxxl: scale(32),
};

export const margin = {
  none: 0,
  xxs: scale(2),
  xs: scale(4),
  sm: scale(8),
  md: scale(12),
  lg: scale(16),
  xl: scale(20),
  xxl: scale(24),
  xxxl: scale(32),
};
