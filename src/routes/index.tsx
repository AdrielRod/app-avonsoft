import AuthRoutes from '@routes/auth.routes';
import HubRoutes from '@routes/hub.routes';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Routes() {
  const isAuthenticated = false;


  return isAuthenticated ? <HubRoutes /> : <AuthRoutes />;
}
