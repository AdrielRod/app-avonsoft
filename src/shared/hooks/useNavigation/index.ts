import { useNavigation as useNavigationNative } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '@routes/interfaces';

export function useNavigation() {
  const navigation =
    useNavigationNative<NativeStackNavigationProp<StackParamList>>();

  function getScreenParams<K extends keyof StackParamList>(
    screen: K,
  ): StackParamList[K] {
    const route = navigation
      .getState()
      .routes.find(route => route.name === screen);

    return route?.params as StackParamList[K];
  }

  return {
    ...navigation,
    getScreenParams,
  };
}
