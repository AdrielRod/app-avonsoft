import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { QueryClientProvider } from '@tanstack/react-query';
import 'src/prototypes';

import Routes from '@routes';
import { DatePicker, Toast } from '@dls/components';
import Query from '@core/query';

export default function App() {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={Query.getClient()}>
        <GestureHandlerRootView>
          <NavigationContainer>
            <StatusBar style="light" />
            <Routes />

            <Toast />
            <DatePicker />
          </NavigationContainer>
        </GestureHandlerRootView>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}
