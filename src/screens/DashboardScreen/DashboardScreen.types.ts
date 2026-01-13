import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {JournalEntry} from '../../types/journal';
import {RootStackParamList} from '../../types/navigation';

export type DashboardScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Dashboard'
> & {
  entries: JournalEntry[];
};


