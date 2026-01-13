import {Dimensions} from 'react-native';

export const getScreenWidth = () => {
  return Dimensions.get('screen').width;
};

export const getScreenHeight = () => {
  return Dimensions.get('screen').height;
};

export const getScreenWidthByPercentage = (percent: number) => {
  return Dimensions.get('screen').width * (percent / 100);
};

export const getScreenHeightByPercentage = (percent: number) => {
  return Dimensions.get('screen').height * (percent / 100);
};
