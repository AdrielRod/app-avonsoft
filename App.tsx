import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import Routes from '@routes';
import { Toast } from '@dls/components';

export default function App() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView>
        <NavigationContainer>
          <StatusBar style="light" />
          <Routes />

          <Toast />
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
