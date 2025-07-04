import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { Client, CreateClient, Home, Search } from '@modules/hub/mobile/screens';
import type { StackParamList } from '@routes/interfaces';
import { theme } from '@dls/themes/colors';

const Stack = createNativeStackNavigator<StackParamList>();
const Bottom = createBottomTabNavigator<StackParamList>();

function SearchStacks() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'hub/search'} component={Search} />
      <Stack.Screen name={'hub/client'} component={Client} />
    </Stack.Navigator>
  );
}

export default function HubHoutes() {
  return (
    <Bottom.Navigator
      initialRouteName="hub/home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: theme.COLORS.background,
          paddingTop: 12,
        },
        tabBarActiveTintColor: theme.COLORS.primary,
        tabBarInactiveTintColor: theme.COLORS.tertiary,
      }}>
      <Bottom.Screen
        name={'hub/search-tab'}
        component={SearchStacks}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="search" size={24} color={color} />
          ),
        }}
      />
      <Bottom.Screen
        name={'hub/home'}
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
        }}
      />
      <Bottom.Screen
        name={'hub/create-client'}
        component={CreateClient}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-add" size={24} color={color} />
          ),
        }}
      />
    </Bottom.Navigator>
  );
}
