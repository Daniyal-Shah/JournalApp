import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';

export type JournalScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Journal'
> & {
  onSubmit: (text: string) => void;
};
