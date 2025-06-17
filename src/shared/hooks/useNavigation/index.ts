import { useNavigation as useNavigationNative } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '@routes/interfaces';

export function useNavigation() {
  return useNavigationNative<NativeStackNavigationProp<StackParamList>>();
}
