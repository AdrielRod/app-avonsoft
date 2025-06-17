import { NavigationContainer } from '@react-navigation/native';

import Routes from '@routes';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="light" />
        <Routes />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
