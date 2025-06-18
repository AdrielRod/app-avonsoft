import { useAuth } from '@modules/auth/business/stores';
import AuthRoutes from '@routes/auth.routes';
import HubRoutes from '@routes/hub.routes';

export default function Routes() {
  const isThereUser = useAuth(({ user }) => !!user);

  return isThereUser ? <HubRoutes /> : <AuthRoutes />;
}
