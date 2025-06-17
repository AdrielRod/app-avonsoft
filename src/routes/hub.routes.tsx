import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignIn } from '@modules/auth/mobile/screens';

const Stack = createNativeStackNavigator();

export default function HubHoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'auth/sign-in'} component={SignIn} />
    </Stack.Navigator>
  );
}
