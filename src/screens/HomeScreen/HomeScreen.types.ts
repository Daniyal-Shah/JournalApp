import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Home'
> & {
  entriesCount: number;
};
