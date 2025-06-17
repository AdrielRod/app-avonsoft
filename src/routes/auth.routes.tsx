import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignIn, SignUp } from '@modules/auth/mobile/screens';
import { StackParamList } from '@routes/interfaces';

const Stack = createNativeStackNavigator<StackParamList>();

export default function AuthRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'auth/sign-in'} component={SignIn} />
      <Stack.Screen name={'auth/sign-up'} component={SignUp} />
    </Stack.Navigator>
  );
}
